## webpack

### 核心概念

-   entry：入口。webpack 是基于模块的，使用 webpack 首先需要指定模块解析入口(entry)，webpack 从入口开始根据模块间依赖关系递归解析和处理所有资源文件。
-   output：输出。源代码经过 webpack 处理之后的最终产物。
-   loader：模块转换器。本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。
-   plugin：扩展插件。基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
-   module：模块。除了 js 范畴内的 es module、commonJs、AMD 等，css @import、url(...)、图片、字体等在 webpack 中都被视为模块。
-   另外 webpack4 开始 mode 变成一个重要概念，webpack 为不同 mode 提供了一些默认值，

### 打包流程

1.  初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
2.  初始化编译：用上一步得到的参数初始化 Compiler 对象，注册插件并传入 Compiler 实例（挂载了众多 webpack 事件 api 供插件调用）；
3.  AST & 依赖图：从入口文件（entry）出发，调用 AST 引擎(acorn)生成抽象语法树 AST，根据 AST 构建模块的所有依赖；
4.  递归编译模块：调用所有配置的 Loader 对模块进行编译；
5.  输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
6.  输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统；

> 在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到相关事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果

构建流程核心概念：

-   Tapable：一个基于发布订阅的事件流工具类，Compiler 和 Compilation 对象都继承于 Tapable
-   Compiler：webpack 编译贯穿始终的核心对象，在编译初始化阶段被创建的全局单例，包含完整配置信息、loaders、plugins 以及各种工具方法
-   Compilation：代表一次 webpack 构建和生成编译资源的的过程，在 watch 模式下每一次文件变更触发的重新编译都会生成新的 Compilation 对象，包含了当前编译的模块 module, 编译生成的资源，变化的文件, 依赖的状态等

### loader

loader 就像一个翻译官，将源文件经过转换后生成目标文件并交由下一流程处理

-   每个 loader 职责都是单一的，就像流水线上的工人
-   顺序很关键（从右往左）

实现准则

-   简单【Simple】loader 只做单一任务，多个 loader > 一个多功能 loader 链式【Chaining】
-   遵循链式调用原则
-   无状态【Stateless】即函数式里的 Pure Function，无副作用
-   使用工具库【Loader Utilities】充分利用 loader-utils 包

```js
//  rules: [
//         {
//      test: /\.js$/,
//      use: [          {
//            loader: path.resolve("lib/loader/loader1.js"),
//            options: {   message: "this is a message",
//            }
//         }
//           ]
module.exports = function(source) {
    // 获取loader配置项
    const options = loaderUtils.getOptions(this)
    console.log('loader配置项:', options)
    const result = source
        .replace(/console.log\(.*\);?/g, '')
        .replace(/\n/g, '')
        .concat(`console.log("${options.message || '没有配置项'}");`)
    return result
}
```

异步 loader

```js
/** lib/loader/loader1.js */ /** 异步loader */
module.exports = function(source) {
    let count = 1

    // 1.调用this.async() 告诉webpack这是一个异步loader，需要等待 asyncCallback 回调之后再进行下一个loader处理

    // 2.this.async 返回异步回调，调用表示异步loader处理结束

    const asyncCallback = this.async()
    const timer = setInterval(() => {
        console.log(`时间已经过去${count++}秒`)
    }, 1000) // 异步操作
    setTimeout(() => {
        clearInterval(timer)
        asyncCallback(null, source)
    }, 3200)
}
```

### plugin

在 webpack 编译整个生命周期的特定节点执行特定功能

实现要点：

-   一个命名 JS 函数或者 JS 类
-   在 prototype 上定义一个 apply 方法（供 webpack 调用，并且在调用时注入 compiler 对象）
-   在 apply 函数中需要有通过 compiler 对象挂载的 webpack 事件钩子（钩子函数中能拿到当前编译的 compilation 对象）
-   处理 webpack 内部实例的特定数据
-   功能完成后调用 webpack 提供的回调

基本模型

```js
// 1、Plugin名称
const MY_PLUGIN_NAME = 'MyBasicPlugin'
class MyBasicPlugin {
    // 2、在构造函数中获取插件配置项
    constructor(option) {
        this.option = option
    } // 3、在原型对象上定义一个apply函数供webpack调用
    apply(compiler) {
        // 4、注册webpack事件监听函数
        compiler.hooks.emit.tapAsync(
            MY_PLUGIN_NAME,
            (compilation, asyncCallback) => {
                // 5、操作Or改变compilation内部数据
                console.log(compilation)
                console.log('当前阶段 ======> 编译完成，即将输出到output目录') // 6、如果是异步钩子，结束后需要执行异步回调
                asyncCallback()
            }
        )
    }
}
// 7、模块导出
module.exports = MyBasicPlugin
```

实现一个 plugin，功能是在 dist 目录自动生成 README 文件：

```js
const MY_PLUGIN_NAME = 'MyReadMePlugin'
// 插件功能：自动生成README文件，标题取自插件option
class MyReadMePlugin {
    constructor(option) {
        this.option = option || {}
    }
    apply(compiler) {
        compiler.hooks.emit.tapAsync(
            MY_PLUGIN_NAME,
            (compilation, asyncCallback) => {
                compilation.assets['README.md'] = {
                    // 文件内容
                    source: () => {
                        return `# ${this.option.title || '默认标题'}`
                    }, // 文件大小
                    size: () => 30
                }
                asyncCallback()
            }
        )
    }
}
// 7、模块导出
module.exports = MyReadMePlugin
```

### 优化

-   使用 speed-measure-webpack-plugin 测量打包速度
-   使用 webpack-bundle-analyzer 进行体积分析

#### 优化 loader

思路主要是优化搜索时间、缩小文件搜索范围、减少不必要的编译工作，具体做法可以看以下配置文件

```js
module.exports = {
    module: {
        rules: [
            {
                // 如果项目源码中只有 文件，就不要写成/\jsx?$/，以提升正则表达式的性能
                test: /\.js$/, // babel-loader 支持缓存转换出的结果，通过 cacheDirectory 选项开启
                use: ['babel-loader?cacheDirectory'], // 只对项目根目录下 src 目录中的文件采用 babel-loader
                include: path.resolve(__dirname, 'src'), // 使用resolve.alias把原导入路径映射成一个新的导入路径，减少耗时的递归解析操作
                alias: {
                    react: path.resolve(
                        __dirname,
                        './node_modules/react/dist/react.min.js'
                    )
                }, // 让 Webpack 忽略对部分没采用模块化的文件的递归解析处理
                noParse: '/jquery|lodash/'
            }
        ]
    }
}
```

#### DLLPlugin 将更改频率较低的代码（三方库）移到单独的编译中

#### 合理利用缓存 缩短非首次构建时间

插件是 `hard-source-webpack-plugin`，效果较为显著

#### Code Splitting

-   多 entry 配置（多 entry 是天然的 code splitting，但是基本没人会因为性能优化的点去把一个单页应用改成多 entry）
-   使用 SplitChunksPlugin 进行重复数据删除和提取
-   使用 Dynamic Import 指定模块拆分，并且可以结合 preload、prefetch 做更多用户体验上的优化
