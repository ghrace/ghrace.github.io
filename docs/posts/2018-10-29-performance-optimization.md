## 性能优化

浏览器打开网页的过程
1. 浏览器对URL进行DNS解析
2. 浏览器与服务器进行TCP连接
3. 浏览器发出HTTP请求
4. 服务器返回HTTP响应
5. 浏览器进行页面渲染

前端的资源加载优化两个方向:
1. 开源 增加域名,cdn,可以第三方,可以二级域名
2. 节流 资源压缩、按需加载,文件多了,就按需加载,延时加载

## 提前解析DNS
```html
<!-- DNS prefetch技术 -->
<link ref="dns-prefetch" href="">
<meta http-equiv="x-dns-prefetch-control" content="on/off">

```

其中 图片处理
- css实现(按钮,阴影)
- 压缩尺寸 大小
- spirte
- svg toff
- canvas绘制大图(map)

## script阻塞
script放到最后,或者用 defer和async
- 有 `async` 加载和渲染后续文档元素的过程将和脚本的加载与执行并行进行（异步）,html4.0中定义了defer
- 有 `defer`，加载后续文档元素的过程将和脚本加载并行进行（异步），但是脚本的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成,html5.0中定义了async
- async 则是乱序执行，反正对它来说脚本的加载和执行是紧紧挨着的，所以不管你声明的顺序如何，只要它加载完了就会立刻执行,对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的，最典型的例子：`Google Analytics`

## js执行
1. 作用域层级不要太深,或者嵌套多
2. 循环优化
```js
//缓存length,不用每次计算 测试原生for循环速度是最快的,比forEach map
for(let i = 0, len = list.length; i < len; i++) {
    //do something
}
```
3. 数组和对象，避免使用构造函数Array(),Object()
```js
// bad 
let a = new Array();
a[0] = 1;
let o = new Obejct();
o.name = "jack";
// good
let a = [1,45];
let o = {
    name : "jack",
};
```
4. DOM编程
尽可能少的重绘repaint和重排reflow,  
当页面的布局发生变化，影响到现有的文档流需要重新调整页面排版的时候,比如:
- 添加或删除可见的DOM元素
- DOM元素位置改变
- DOM元素尺寸改变：容器padding、border、margin属性变化等
- 容器内的内容变化导致宽高变化：文本行数变多（少）、图片坍塌、图片被另一张大图替换
- 浏览器窗口初始化和尺寸改变 重排结束后，就需要重绘。所以，尽可能的避免重排的产生，为了避免或少的进行重绘和重排，需要尽可能少的访问某些变量:
```js
offsetTop、offsetLeft、offsetWidth、offsetHeight
scrollTop、scrollLeft、scrollWidth、scrollHeight
clientTop、clientLeft、clientWidth、clientHeight
```
总结:少访问DOM，在js里处理计算完了再一次性修改，善用缓存和原生API

## 浏览器
- DNS查询,减少DNS查询次数
- tcp/http 主要核心
    1. 消除和减少不必要的网络延迟
    2. 把传输字节数降到最少
具体
    - 减少HTTP请求：对于HTTP1.0/1.1 减少请求资源数（打包、压缩、合并等）
    - 使用CDN
    - 添加Expires首部并配置ETag标签
    - gZip压缩js.css 不要压图片
    - 避免HTTP重定向
    - 持久化连接：避免TCP的三次握手，HTTP1.1默认开启，HTTP1.0可以使用：`Connection: Keep-Alive`
    - 消除不必要的请求字节
    - 嵌入资源，如：Base64嵌入资源（针对小的静态图片资源）
## webpack优化
1. **压缩图片**  

可以用 `image-webpack-loader` 来压缩图片
```js
{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  use:[
    {
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true,
      }
    }
  ]
}
```
2. **减少 ES6 转为 ES5 的冗余代码**  

Babel 插件会在将 ES6 代码转换成 ES5 代码时会注入一些辅助函数,多个源代码文件都依赖这些辅助函数，那么这些辅助函数的代码将会出现很多次，造成代码冗余  

`babel-plugin-transform-runtime` 插件就是将相关辅助函数进行替换成导入语句，从而减小 babel 编译出来的代码的文件大小  

修改 .babelrc 配置文件
```js
"plugins": [
    "transform-runtime"
]
```
3. **提取公共代码**  

将每个页面的第三方库和公共模块提取出来,抽离成单独的文件,用`CommonsChunkPlugin`插件
```js
// 所有在 package.json 里面依赖的包，都会被打包进 vendor.js 这个文件中。
new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: function(module, count) {
    return (
      module.resource &&
      /\.js$/.test(module.resource) &&
      module.resource.indexOf(
        path.join(__dirname, '../node_modules')
      ) === 0
    );
  }
}),
// 抽取出代码模块的映射关系
new webpack.optimize.CommonsChunkPlugin({
  name: 'manifest',
  chunks: ['vendor']
})
```
4. **模板预编译**  

编译模板最简单的方式就是使用单文件组件——相关的构建设置会自动把预编译处理好，所以构建好的代码已经包含了编译出来的渲染函数而不是原始的模板字符串
可以使用 `vue-template-loader`，它也可以在构建过程中把模板文件转换成为 JavaScript 渲染函数  

DLLPlugin预编译,插件专门用于单独的webpack配置中，以创建dll的捆绑包。它创建一个manifest.json文件，DllReferencePlugin使用它来映射依赖项

5. **提取css**  

所有组件的 CSS 提取到同一个文件可以避免这个问题，也会让 CSS 更好地进行压缩和缓存  
`webpack + vue-loader` ( vue-cli 的 webpack 模板已经预先配置好)

6. **优化 SourceMap**  

开发环境推荐： `cheap-module-eval-source-map`

生产环境推荐： `cheap-module-source-map`
7. **多线程压缩**
```js
// happypack
//1. 安装依赖
 npm install --save-dev thread-loader (之后方法省略该步骤)
//2. module中引入
  module: {
          rules: [
              {
                  test: /\.js$/,
                  include: path.resolve(__dirname, '../src'),
                  //多线程编译 项目不大不建议使用
                  use: [{
                      loader: 'thread-loader',
                      options: {
                          workers: 3
                      }
                  },
                 	'babel-loader?cacheDirectory=true']

              }
            ]
  }
```
8. **多线程多实例压缩**
```js
//安装后添加到optimization中
optimization: {
    minimizer: [
      new TerserPlugin({
        //开启并行压缩，true为默认值，可设数值， 同样项目小不建议使用，可能反而延长时间
        parallel: true,
        //开启压缩缓存
        cache: true
      })
    ],
  },
```
9. **开启缓存**
- 开启babel-loaer缓存（直接在babel-loader后添加?cacheDirectory=true方法1中)
- 开启terser-webpack-plugin缓存
- 使用`hard-source-webpack-plugin`提升模块转换阶段缓存
```
plugins:[
		// ...
    new HardSourceWebpackPlugin(),
]
```
10. **css treeShaking**
`purgecss-webpack-plugin` 进行treeshaking，删除未使用的css；
```js
const PATHS = {
    src: path.join(__dirname, '../src')
}

plugins:[
		new MiniCssExtractPlugin(),
		//必须和mini-css-extract-plugin配合使用
    new PurgecssPlugin({
    	paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
  ]
```
11. **缩小构建目标**
缩小构建目标，减少每次构建文件查找范围也能提高速度
```js
// 1. 排除或缩小目录
    module: {
        rules: [
            {
                test: /\.js$/,
              	//只在解析src下文件
              	include: path.resolve(__dirname, '../src'),
              	//排除 node_module文件夹，通常不需要同时使用。
								exclude: 'node_module',
              }
          ]
    	}
//2.resolve模块使用
  resolve: {
    //合理使用别名,减少搜索层级
    alias: {
      //import react可以直接找到
      "react": path.resolve(__dirname, "../node_module/react/dist/react.min.js"),
    },
     modules:[path.resolve(__dirname,"../node_module")]
      //后缀名，如import 'index'时会自动按extensions顺序查找，可选多个，但查找速度慢，指定为一下数组中类型时，其他类必须写明后缀，否则无法找到
     extensions:[.js],
     //packjson指定的入口文件
     mainFeilds:['main'] 
  }      
```
12. **其他**
```js
plugins:[
  // 提示框
  new WebpackBuildNotifyerPlugin({
  	//提示项目名
    title: 'project',
    suppressSuccess: true
  }),
  //进度条
  new ProgressBarPlugin(),
  //仪表盘，看需要
  //new DashboardPlugin()，
  //错误提示，需要同stats使用
  new FriendlyErrorsWebpackPlugin(),
	// 体积分析，需要的时候加上，有多种分析插件
  // new BundleAnalyzerPlugin(),
]
```
## vue项目优化
1. **长列表性能优化**  

禁止 Vue 劫持我们的数据,可以通过 Object.freeze 方法来冻结一个对象，一旦被冻结的对象就再也不能被修改了
```js
export default {
  data: () => ({
    users: {}
  }),
  async created() {
    const users = await axios.get("/api/users");
    this.users = Object.freeze(users);
  }
};
```
2. v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景

3. computed watch
 - 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；

 - 当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

4. v-for 遍历避免同时使用 v-if
v-for 比 v-if 优先级高，如果每一次都需要遍历整个数组，将会影响速度，尤其是当之需要渲染很小一部分的时候，必要情况下应该替换成 computed 属性。

5. 图片资源懒加载 `vue-lazyload`
6. 路由懒加载
```js 
const Foo = () => import('./Foo.vue')
const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})
```
7. 第三方插件的按需引入
插件   `babel-plugin-component`
```js
// .babelrc
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```
## youtube优化
1. 协议层面尽快升级到http/2+quic（http/3），会为我们带来15%性能提升，并且可以让挤地铁的同学有更好的视频播放体验

2. 压缩格式br，可以更有效的压缩html、js、css

Gzip 压缩算法简介:

Gzip 基于 DEFLATE 算法，它是 LZ77 和霍夫曼编码的组合，最早用于 UNIX 系统的文件压缩。HTTP 协议上的 Gzip 编码是一种用来进 Web 应用程序性能的技术，Web 服务器和客户端（浏览器）必须共同支持 Gzip，当下主流的浏览器都是支持 Gzip 压缩，包括 IE6、IE7、IE8、IE9、FireFox、Google Chrome、Opera 等。

Brotli 压缩算法简介:

Google 在 2015 年 9 月推出了无损压缩算法 Brotli。Brotli 通过变种的 LZ77 算法、Huffman 编码以及二阶文本建模等方式进行数据压缩，与其他压缩算法相比，它有着更高的压缩效率。

Brotli 压缩算法具有多个特点，最典型的是以下 3 个：

- 针对常见的 Web 资源内容，Brotli 的性能相比 Gzip 提高了 17-25%；
- 当 Brotli 压缩级别为 1 时，压缩率比 Gzip 压缩等级为 9（最高）时还要高；
- 在处理不同 HTML 文档时，Brotli 依然能够提供非常高的压缩率。

除了 IE 和 Opera Mini 之外，几乎所有的主流浏览器都已支持 Brotli 算法。
```
Nginx 配置

#Brotli Compression
brotli on;
brotli_comp_level 6;
brotli_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript image/svg+xml;
```
3. 对于多页面公用的css和js，你可以通过在http header中增加link perconnent，让文件内引用的其他域名获得加速，而不需要在html新增标签覆盖面更广

4. 合理使用 `requestIdleCallback` & `cancelIdleCallback` 可以让你的代码执行减少拥堵

5. 如果你需要把一个多页面站点改造成单页应用又不想付出高昂的代价，可以尝试考虑spf.js的方案（需要服务端配合,劫持全局A链接的点击事件，只请求下一个页面渲染所需的数据在当前页面完成渲染，避免了大量无意义的http建联和模块重新渲染的开销，加快了页面渲染的速度。

6. 在首个请求体积可控的情况下内联必须的JS和CSS会让你获得更快的首屏时间（实验结果建议<200k）

7. 采用svg实现icon，不仅体积小还可以实现动画，比base64和iconfont要更灵活。

8. 尽可能的重用页面资源和已渲染的模块，避免任何一点不必要的浪费

9. 视频格式 vp9和av1比国内常见的h.264有明显的优势，而且不像h.265要收取高额的费用

10. `Web Animations api`,允许同步和定时更改网页的呈现, 即DOM元素的动画。它通过组合两个模型来实现：时序模型 和 动画模型

11. `Web Components & Polymer`,允许您创建可重用的定制元素（它们的功能封装在您的代码之外）并且在您的web应用中使用它们
