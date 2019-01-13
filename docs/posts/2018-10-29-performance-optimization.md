## 性能优化总结

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