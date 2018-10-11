(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{73:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"promise-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-重点","aria-hidden":"true"}},[s._v("#")]),s._v(" Promise (重点)")]),s._v(" "),a("h3",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("ol",[a("li",[s._v("Promise对象代表一个异步操作，有三种状态："),a("code",[s._v("pending")]),s._v("（进行中）、"),a("code",[s._v("fulfilled")]),s._v("（已成功）和"),a("code",[s._v("rejected")]),s._v("（已失败）")]),s._v(" "),a("li",[s._v("一旦状态改变，就不会再变。Promise对象的状态改变，只有两种可能：从"),a("code",[s._v("pending")]),s._v("变为"),a("code",[s._v("fulfilled")]),s._v("和从"),a("code",[s._v("pending")]),s._v("变为"),a("code",[s._v("rejected")]),s._v("。")]),s._v(" "),a("li",[s._v("缺点:首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。")])]),s._v(" "),a("h3",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法","aria-hidden":"true"}},[s._v("#")]),s._v(" 用法")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" promise "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Promise")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("resolve"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reject"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token comment"}},[s._v("// ... some code")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token comment"}},[s._v("/* 异步操作成功 */")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token function"}},[s._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token function"}},[s._v("reject")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\npromise"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("then")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token comment"}},[s._v("//resolve 结果")]),s._v("\n  "),a("span",{attrs:{class:"token comment"}},[s._v("// success")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token keyword"}},[s._v("catch")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token comment"}},[s._v("//error  catch捕获异常")]),s._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'发生错误！'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" error"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token keyword"}},[s._v("finally")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token comment"}},[s._v("//do something 不管状态如何都执行")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[a("strong",[s._v("Promise.all()和race()")]),s._v("\n用于多个Promise示例,包装成新的Promise示例")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" p "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" Promise"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("all")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("p1"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p2"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p3"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("/**\n1.只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。\n2. 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。\n*/")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" race "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" Promise"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("race")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("p1"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p2"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p3"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("/**\n只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。\n*/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"iterator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iterator","aria-hidden":"true"}},[s._v("#")]),s._v(" Iterator")]),s._v(" "),a("h3",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),a("p",[s._v("遍历器（"),a("code",[s._v("Iterator")]),s._v("）是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 "),a("code",[s._v("Iterator")]),s._v(" 接口，就可以完成遍历操作"),a("br"),s._v(" "),a("code",[s._v("Iterator")]),s._v("的作用有三个：")]),s._v(" "),a("ul",[a("li",[s._v("一是为各种数据结构，提供一个统一的、简便的访问接口；")]),s._v(" "),a("li",[s._v("二是使得数据结构的成员能够按某种次序排列；")]),s._v(" "),a("li",[s._v("三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。")])]),s._v(" "),a("p",[s._v("原生具备 "),a("code",[s._v("Iterator")]),s._v(" 接口的数据结构如下")]),s._v(" "),a("ul",[a("li",[s._v("Array")]),s._v(" "),a("li",[s._v("Map")]),s._v(" "),a("li",[s._v("Set")]),s._v(" "),a("li",[s._v("String")]),s._v(" "),a("li",[s._v("TypedArray")]),s._v(" "),a("li",[s._v("函数的arguments对象")]),s._v(" "),a("li",[s._v("NodeList对象")])]),s._v(" "),a("p",[s._v("调用"),a("strong",[s._v("Iterator")]),s._v("接口的场合")]),s._v(" "),a("ol",[a("li",[s._v("解构赋值")]),s._v(" "),a("li",[s._v("扩展运算符"),a("code",[s._v("...")])]),s._v(" "),a("li",[a("code",[s._v("yield*")]),s._v(",后面跟可遍历的结构，它会调用该结构的遍历器接口")]),s._v(" "),a("li",[a("code",[s._v("for...of")])]),s._v(" "),a("li",[a("code",[s._v("Array.from()")])]),s._v(" "),a("li",[a("code",[s._v("Promise.all()")]),s._v(","),a("code",[s._v("Promise.race()")])]),s._v(" "),a("li",[a("code",[s._v("Map(), Set(), WeakMap(), WeakSet()")])])]),s._v(" "),a("h2",{attrs:{id:"generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generator","aria-hidden":"true"}},[s._v("#")]),s._v(" Generator")]),s._v(" "),a("h3",{attrs:{id:"概念-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),a("p",[s._v("Generator 函数是一个普通函数，但是有两个特征。一是，"),a("code",[s._v("function")]),s._v("关键字与函数名之间有一个星号；二是，函数体内部使用"),a("code",[s._v("yield")]),s._v("表达式，定义不同的内部状态,调用遍历器对象的"),a("code",[s._v("next")]),s._v("方法，使得指针移向下一个状态")]),s._v(" "),a("h3",{attrs:{id:"用法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 用法")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("function")]),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("g")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'hello'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'world'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'ending'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" hw "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("g")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nhw"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("next")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//{value:'hello',done:false}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("返回一个遍历器,可以用"),a("code",[s._v("for of")]),s._v(" 循环,"),a("code",[s._v("...")]),s._v("运算,解构")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("function")]),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("yield")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("3")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("6")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 扩展运算符")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token operator"}},[s._v("...")]),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// [1, 2,3]")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("// Array.from 方法")]),s._v("\nArray"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// [1, 2,3]")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 解构赋值")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("x"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nx "),a("span",{attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\ny "),a("span",{attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" v "),a("span",{attrs:{class:"token keyword"}},[s._v("of")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 1 2 3 ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[a("strong",[s._v("co模块 可以自动执行 Generator 函数")])]),s._v(" "),a("h2",{attrs:{id:"async-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-重点","aria-hidden":"true"}},[s._v("#")]),s._v(" async (重点)")]),s._v(" "),a("h3",{attrs:{id:"含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#含义","aria-hidden":"true"}},[s._v("#")]),s._v(" 含义")]),s._v(" "),a("p",[s._v("async 是Generator 函数的语法糖,把"),a("code",[s._v("*")]),s._v("换成"),a("code",[s._v("async")]),s._v(","),a("code",[s._v("yield")]),s._v(" 换成"),a("code",[s._v("await")]),s._v(",并且内置执行器,返回值是Promise对象"),a("br"),s._v("\n(python 也有差不多的语法 async await)")]),s._v(" "),a("h3",{attrs:{id:"用法-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-3","aria-hidden":"true"}},[s._v("#")]),s._v(" 用法")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// 函数声明")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 函数表达式")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" foo "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 对象的方法")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nobj"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("then")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token operator"}},[s._v("...")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("// Class 的方法")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Storage")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token function"}},[s._v("constructor")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("this")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cachePromise "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" caches"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("open")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'avatars'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("getAvatar")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" cache "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("this")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cachePromise"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" cache"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("match")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`/avatars/")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("name"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{attrs:{class:"token string"}},[s._v(".jpg`")])]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" storage "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Storage")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstorage"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("getAvatar")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'jake'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("then")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("…"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 箭头函数")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" foo "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h3",{attrs:{id:"错误处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误处理","aria-hidden":"true"}},[s._v("#")]),s._v(" 错误处理")]),s._v(" "),a("p",[s._v("await后面的异步操作出错，那么等同于async函数返回的 Promise 对象被reject。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("f")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("then")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("v"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token keyword"}},[s._v("catch")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//放在try...catch代码块")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("main")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" val1 "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("firstStep")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" val2 "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("secondStep")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("val1"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" val3 "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("thirdStep")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("val1"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" val2"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'Final: '")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" val3"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("catch")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token class-name"}},[s._v("err")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("error")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"多个并发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多个并发","aria-hidden":"true"}},[s._v("#")]),s._v(" 多个并发")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("foo"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bar"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("await")]),s._v(" Promise"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("all")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token function"}},[s._v("getFoo")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("getBar")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}],!1,null,null,null);e.options.__file="2018-08-24-es6-note7.md";t.default=e.exports}}]);