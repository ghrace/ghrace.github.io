## 面试常见问题

## js异步加载  

- 渲染引擎遇到 script 标签会停下来，等到执行完脚本，继续向下渲染
- defer 是“渲染完再执行”，async 是“下载完就执行”，多个defer脚本，会按照在页面中出现的顺序加载，多个async 脚本不能保证加载顺序
- 加载 es6模块的时候设置 type=module，异步加载不会造成阻塞浏览器，页面渲染完再执行，可以同时加上async属性，异步执行脚本（利用顶层的this等于undefined这个语法点，可以侦测当前代码是否在 ES6 模块之中）

## css与js动画

- css性能好
- css代码逻辑相对简单
- js动画好控制
- js兼容性好
- js可实现的动画多
- js可以添加事件

## 负载均衡

多台服务器共同协作，不让其中某一台或几台超额工作，发挥服务器的最大作用

1. http重定向负载均衡：调度者根据策略选择服务器以302响应请求，缺点只有第一次有效果，后续操作维持在该服务器
2. dns负载均衡：解析域名时，访问多个ip服务器中的一个（可监控性较弱）
3. 反向代理负载均衡：访问统一的服务器，由服务器进行调度访问实际的某个服务器，对统一的服务器要求大，性能受到服务器群的数量的影响

## CDN  

内容分发网络(Content Delivery Network)，基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。

## 内存泄漏  

程序中己动态分配的堆内存由于某种原因程序未释放或无法释放引发的各种问题,js中可能出现的内存泄漏情况：变慢，崩溃，延迟大,原因:
1. 全局变量
2. dom清空时，还存在引用
3. ie中使用闭包
4. 定时器未清理
5. 子元素存在引起的内存泄露

避免:

1. 减少不必要的全局变量(用`let`,`const`)，或者生命周期较长的对象，及时对无用的数据进行垃圾回收；
2. 注意程序逻辑，避免“死循环”之类的 ；
3. 避免创建过多的对象 原则：不用了的东西要及时归还。
4. 减少层级过多的引用

## 组件封装  

- 组件封装为了重用，提高开发效率和代码质量
- 低耦合，单一职责，可复用性，可维护性

## 线程,进程  

- 线程是最小的执行单元，进程是最小的资源管理单元
- 一个线程只能属于一个进程，而一个进程可以有多个线程，但至少有一个线程

## 跨域  

- 浏览器的同源策略导致了跨域,用于隔离潜在恶意文件的重要安全机制
- jsonp,只能get请求
- 服务器代理 `server proxy` nginx
- cors,`Access-Control-Allow-Origin:*`
- `iframe`,`domain`,`window.name`
- `postmessage`

## jquery插件  
```js
(function ($) {
	$.fn.myPlugins = function (options) {
	  //参数赋值
	  options = $.extend(defaults, options);//对象合并
	  this.each(function () {
	      //执行代码逻辑
	  });
	};
})(jQuery);

$(selector).myPlugins({参数});
```

## 原生操作class  
```js
//判断有无
function hasClass(ele, cls) {
	return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
//添加
function addClass(ele, cls) {
	if (!this.hasClass(ele, cls)) ele.className += " " + cls;
}
//删除
function removeClass(ele, cls) {
	if (hasClass(ele, cls)) {
		let reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
		ele.className = ele.className.replace(reg, " ");
	}
}
// html5中加入classList 
// 一系列操作
// 兼容至IE10
```

## 网络osi协议  

七层结构：物理层、数据链路层、网络层、传输层、会话层、表示层、应用层 `tcp ucp`属于传输层；`http`属于应用层

## http2.0  

- HTTP2.0的基本单位为二进制帧
- HTTP2.0中帧具有优先级
- HTTP2.0的多路复用（ 1次连接）
- HTTP2.0压缩消息头
- HTTP2.0服务端推送
- HTTP2.0只适用于HTTPS的场景

## vue相关  

和同MVVM的angular对比
- angular 是通过脏检测实现，angular 会将 UI 事件，请求事件，settimeout 这类延迟的对象放入到事件监测的脏队列，当数据变化的时候，触发 $diget 方法进行数据的更新，视图的渲染
- vue 通过数据属性的数据劫持和发布订阅的模式实现，大致由3个模块组成，observer 完成对数据的劫持，compile 完成对模板片段的渲染，watcher 作为桥梁连接二者，订阅数据变化及更新视图

缺点：双向数据流是自动管理状态的, 在实际应用中有不得不手动处理状态变化的逻辑, 使得程序复杂度上升, 难以调试。

初始化数据顺序 `props=>methods=>data=>computed=>watch`,可以用props初始化data  
```js
//源码
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
```