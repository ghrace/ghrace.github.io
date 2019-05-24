(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{76:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"性能优化总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 性能优化总结")]),t._v(" "),a("p",[t._v("浏览器打开网页的过程")]),t._v(" "),a("ol",[a("li",[t._v("浏览器对URL进行DNS解析")]),t._v(" "),a("li",[t._v("浏览器与服务器进行TCP连接")]),t._v(" "),a("li",[t._v("浏览器发出HTTP请求")]),t._v(" "),a("li",[t._v("服务器返回HTTP响应")]),t._v(" "),a("li",[t._v("浏览器进行页面渲染")])]),t._v(" "),a("p",[t._v("前端的资源加载优化两个方向:")]),t._v(" "),a("ol",[a("li",[t._v("开源 增加域名,cdn,可以第三方,可以二级域名")]),t._v(" "),a("li",[t._v("节流 资源压缩、按需加载,文件多了,就按需加载,延时加载")])]),t._v(" "),a("h2",{attrs:{id:"提前解析dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提前解析dns","aria-hidden":"true"}},[t._v("#")]),t._v(" 提前解析DNS")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- DNS prefetch技术 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("x-dns-prefetch-control"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("on/off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),a("p",[t._v("其中 图片处理")]),t._v(" "),a("ul",[a("li",[t._v("css实现(按钮,阴影)")]),t._v(" "),a("li",[t._v("压缩尺寸 大小")]),t._v(" "),a("li",[t._v("spirte")]),t._v(" "),a("li",[t._v("svg toff")]),t._v(" "),a("li",[t._v("canvas绘制大图(map)")])]),t._v(" "),a("h2",{attrs:{id:"script阻塞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script阻塞","aria-hidden":"true"}},[t._v("#")]),t._v(" script阻塞")]),t._v(" "),a("p",[t._v("script放到最后,或者用 defer和async")]),t._v(" "),a("ul",[a("li",[t._v("有 "),a("code",[t._v("async")]),t._v(" 加载和渲染后续文档元素的过程将和脚本的加载与执行并行进行（异步）,html4.0中定义了defer")]),t._v(" "),a("li",[t._v("有 "),a("code",[t._v("defer")]),t._v("，加载后续文档元素的过程将和脚本加载并行进行（异步），但是脚本的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成,html5.0中定义了async")]),t._v(" "),a("li",[t._v("async 则是乱序执行，反正对它来说脚本的加载和执行是紧紧挨着的，所以不管你声明的顺序如何，只要它加载完了就会立刻执行,对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的，最典型的例子："),a("code",[t._v("Google Analytics")])])]),t._v(" "),a("h2",{attrs:{id:"js执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js执行","aria-hidden":"true"}},[t._v("#")]),t._v(" js执行")]),t._v(" "),a("ol",[a("li",[t._v("作用域层级不要太深,或者嵌套多")]),t._v(" "),a("li",[t._v("循环优化")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//缓存length,不用每次计算 测试原生for循环速度是最快的,比forEach map")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//do something")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("数组和对象，避免使用构造函数Array(),Object()")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bad ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Obejct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("DOM编程\n尽可能少的重绘repaint和重排reflow,"),a("br"),t._v("\n当页面的布局发生变化，影响到现有的文档流需要重新调整页面排版的时候,比如:")])]),t._v(" "),a("ul",[a("li",[t._v("添加或删除可见的DOM元素")]),t._v(" "),a("li",[t._v("DOM元素位置改变")]),t._v(" "),a("li",[t._v("DOM元素尺寸改变：容器padding、border、margin属性变化等")]),t._v(" "),a("li",[t._v("容器内的内容变化导致宽高变化：文本行数变多（少）、图片坍塌、图片被另一张大图替换")]),t._v(" "),a("li",[t._v("浏览器窗口初始化和尺寸改变 重排结束后，就需要重绘。所以，尽可能的避免重排的产生，为了避免或少的进行重绘和重排，需要尽可能少的访问某些变量:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("offsetTop、offsetLeft、offsetWidth、offsetHeight\nscrollTop、scrollLeft、scrollWidth、scrollHeight\nclientTop、clientLeft、clientWidth、clientHeight\n")])])]),a("p",[t._v("总结:少访问DOM，在js里处理计算完了再一次性修改，善用缓存和原生API")]),t._v(" "),a("h2",{attrs:{id:"浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器")]),t._v(" "),a("ul",[a("li",[t._v("DNS查询,减少DNS查询次数")]),t._v(" "),a("li",[t._v("tcp/http 主要核心\n"),a("ol",[a("li",[t._v("消除和减少不必要的网络延迟")]),t._v(" "),a("li",[t._v("把传输字节数降到最少\n具体")])]),t._v(" "),a("ul",[a("li",[t._v("减少HTTP请求：对于HTTP1.0/1.1 减少请求资源数（打包、压缩、合并等）")]),t._v(" "),a("li",[t._v("使用CDN")]),t._v(" "),a("li",[t._v("添加Expires首部并配置ETag标签")]),t._v(" "),a("li",[t._v("gZip压缩js.css 不要压图片")]),t._v(" "),a("li",[t._v("避免HTTP重定向")]),t._v(" "),a("li",[t._v("持久化连接：避免TCP的三次握手，HTTP1.1默认开启，HTTP1.0可以使用："),a("code",[t._v("Connection: Keep-Alive")])]),t._v(" "),a("li",[t._v("消除不必要的请求字节")]),t._v(" "),a("li",[t._v("嵌入资源，如：Base64嵌入资源（针对小的静态图片资源）")])])])])])}],!1,null,null,null);s.default=e.exports}}]);