(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{65:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"js异步加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js异步加载","aria-hidden":"true"}},[t._v("#")]),t._v(" js异步加载")]),t._v(" "),a("ul",[a("li",[t._v("渲染引擎遇到 script 标签会停下来，等到执行完脚本，继续向下渲染")]),t._v(" "),a("li",[t._v("defer 是“渲染完再执行”，async 是“下载完就执行”，多个defer脚本，会按照在页面中出现的顺序加载，多个async 脚本不能保证加载顺序")]),t._v(" "),a("li",[t._v("加载 es6模块的时候设置 type=module，异步加载不会造成阻塞浏览器，页面渲染完再执行，可以同时加上async属性，异步执行脚本（利用顶层的this等于undefined这个语法点，可以侦测当前代码是否在 ES6 模块之中）")])]),t._v(" "),a("h2",{attrs:{id:"css与js动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css与js动画","aria-hidden":"true"}},[t._v("#")]),t._v(" css与js动画")]),t._v(" "),a("ul",[a("li",[t._v("css性能好")]),t._v(" "),a("li",[t._v("css代码逻辑相对简单")]),t._v(" "),a("li",[t._v("js动画好控制")]),t._v(" "),a("li",[t._v("js兼容性好")]),t._v(" "),a("li",[t._v("js可实现的动画多")]),t._v(" "),a("li",[t._v("js可以添加事件")])]),t._v(" "),a("h2",{attrs:{id:"负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡","aria-hidden":"true"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),a("p",[t._v("多台服务器共同协作，不让其中某一台或几台超额工作，发挥服务器的最大作用")]),t._v(" "),a("ol",[a("li",[t._v("http重定向负载均衡：调度者根据策略选择服务器以302响应请求，缺点只有第一次有效果，后续操作维持在该服务器")]),t._v(" "),a("li",[t._v("dns负载均衡：解析域名时，访问多个ip服务器中的一个（可监控性较弱）")]),t._v(" "),a("li",[t._v("反向代理负载均衡：访问统一的服务器，由服务器进行调度访问实际的某个服务器，对统一的服务器要求大，性能受到服务器群的数量的影响")])]),t._v(" "),a("h2",{attrs:{id:"cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn","aria-hidden":"true"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),a("p",[t._v("内容分发网络(Content Delivery Network)，基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。")]),t._v(" "),a("h2",{attrs:{id:"内存泄漏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存泄漏","aria-hidden":"true"}},[t._v("#")]),t._v(" 内存泄漏")]),t._v(" "),a("p",[t._v("程序中己动态分配的堆内存由于某种原因程序未释放或无法释放引发的各种问题,js中可能出现的内存泄漏情况：变慢，崩溃，延迟大,原因:")]),t._v(" "),a("ol",[a("li",[t._v("全局变量")]),t._v(" "),a("li",[t._v("dom清空时，还存在引用")]),t._v(" "),a("li",[t._v("ie中使用闭包")]),t._v(" "),a("li",[t._v("定时器未清理")]),t._v(" "),a("li",[t._v("子元素存在引起的内存泄露")])]),t._v(" "),a("p",[t._v("避免:")]),t._v(" "),a("ol",[a("li",[t._v("减少不必要的全局变量(用"),a("code",[t._v("let")]),t._v(","),a("code",[t._v("const")]),t._v(")，或者生命周期较长的对象，及时对无用的数据进行垃圾回收；")]),t._v(" "),a("li",[t._v("注意程序逻辑，避免“死循环”之类的 ；")]),t._v(" "),a("li",[t._v("避免创建过多的对象 原则：不用了的东西要及时归还。")]),t._v(" "),a("li",[t._v("减少层级过多的引用")])]),t._v(" "),a("h2",{attrs:{id:"组件封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件封装","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件封装")]),t._v(" "),a("ul",[a("li",[t._v("组件封装为了重用，提高开发效率和代码质量")]),t._v(" "),a("li",[t._v("低耦合，单一职责，可复用性，可维护性")])]),t._v(" "),a("h2",{attrs:{id:"线程-进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程-进程","aria-hidden":"true"}},[t._v("#")]),t._v(" 线程,进程")]),t._v(" "),a("ul",[a("li",[t._v("线程是最小的执行单元，进程是最小的资源管理单元")]),t._v(" "),a("li",[t._v("一个线程只能属于一个进程，而一个进程可以有多个线程，但至少有一个线程")])]),t._v(" "),a("h2",{attrs:{id:"跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域","aria-hidden":"true"}},[t._v("#")]),t._v(" 跨域")]),t._v(" "),a("ul",[a("li",[t._v("浏览器的同源策略导致了跨域,用于隔离潜在恶意文件的重要安全机制")]),t._v(" "),a("li",[t._v("jsonp,只能get请求")]),t._v(" "),a("li",[t._v("服务器代理 "),a("code",[t._v("server proxy")]),t._v(" nginx")]),t._v(" "),a("li",[t._v("cors,"),a("code",[t._v("Access-Control-Allow-Origin:*")])]),t._v(" "),a("li",[a("code",[t._v("iframe")]),t._v(","),a("code",[t._v("domain")]),t._v(","),a("code",[t._v("window.name")])]),t._v(" "),a("li",[a("code",[t._v("postmessage")])])]),t._v(" "),a("h2",{attrs:{id:"jquery插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery插件","aria-hidden":"true"}},[t._v("#")]),t._v(" jquery插件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myPlugins")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//参数赋值")]),t._v("\n\t  options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("defaults"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对象合并")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//执行代码逻辑")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("myPlugins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"原生操作class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原生操作class","aria-hidden":"true"}},[t._v("#")]),t._v(" 原生操作class")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//判断有无")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(\\\\s|^)"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" cls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(\\\\s|$)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//添加")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//删除")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(\\\\s|^)"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" cls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(\\\\s|$)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// html5中加入classList ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一系列操作")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 兼容至IE10")]),t._v("\n")])])]),a("h2",{attrs:{id:"网络osi协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络osi协议","aria-hidden":"true"}},[t._v("#")]),t._v(" 网络osi协议")]),t._v(" "),a("p",[t._v("七层结构：物理层、数据链路层、网络层、传输层、会话层、表示层、应用层 "),a("code",[t._v("tcp ucp")]),t._v("属于传输层；"),a("code",[t._v("http")]),t._v("属于应用层")]),t._v(" "),a("h2",{attrs:{id:"http2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http2-0","aria-hidden":"true"}},[t._v("#")]),t._v(" http2.0")]),t._v(" "),a("ul",[a("li",[t._v("HTTP2.0的基本单位为二进制帧")]),t._v(" "),a("li",[t._v("HTTP2.0中帧具有优先级")]),t._v(" "),a("li",[t._v("HTTP2.0的多路复用（ 1次连接）")]),t._v(" "),a("li",[t._v("HTTP2.0压缩消息头")]),t._v(" "),a("li",[t._v("HTTP2.0服务端推送")]),t._v(" "),a("li",[t._v("HTTP2.0只适用于HTTPS的场景")])]),t._v(" "),a("h2",{attrs:{id:"vue相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue相关","aria-hidden":"true"}},[t._v("#")]),t._v(" vue相关")]),t._v(" "),a("p",[t._v("和同MVVM的angular对比")]),t._v(" "),a("ul",[a("li",[t._v("angular 是通过脏检测实现，angular 会将 UI 事件，请求事件，settimeout 这类延迟的对象放入到事件监测的脏队列，当数据变化的时候，触发 $diget 方法进行数据的更新，视图的渲染")]),t._v(" "),a("li",[t._v("vue 通过数据属性的数据劫持和发布订阅的模式实现，大致由3个模块组成，observer 完成对数据的劫持，compile 完成对模板片段的渲染，watcher 作为桥梁连接二者，订阅数据变化及更新视图")])]),t._v(" "),a("p",[t._v("缺点：双向数据流是自动管理状态的, 在实际应用中有不得不手动处理状态变化的逻辑, 使得程序复杂度上升, 难以调试。")]),t._v(" "),a("p",[t._v("初始化数据顺序 "),a("code",[t._v("props=>methods=>data=>computed=>watch")]),t._v(",可以用props初始化data")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//源码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initState")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_watchers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" opts "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initProps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initMethods")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* asRootData */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initComputed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("watch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("watch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" nativeWatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initWatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("watch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"webpack-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-loader","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack loader")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loader就是一个node模块，它输出了一个函数。当某种资源需要用这个loader转换时，这个函数会被调用。并且，这个函数可以通过提供给它的this上下文访问Loader API。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reverse-txt-loader")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//src是原文件内容（abcde），下面对内容进行处理，这里是反转")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回JavaScript源码，必须是String或者Buffer")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("module.exports = '")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.txt$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tuse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/reverse-txt-loader'")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);