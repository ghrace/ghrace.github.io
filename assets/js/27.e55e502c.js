(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{60:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("p",[t._v("vue源码有很多值得学习的地方,编码规范风格,思想等等,先学习下vue的一些公共的函数")]),t._v(" "),n("h2",{attrs:{id:"vue公共函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue公共函数","aria-hidden":"true"}},[t._v("#")]),t._v(" vue公共函数")]),t._v(" "),n("p",[t._v("打开vue.common.js,定义了一些后续会用到的函数")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("//空对象,用object.freeze冻结一个对象，冻结指的是不能向这个对象添加新的属性，")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。该方法返回被冻结的对象。")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" emptyObject "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("freeze")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//判断是否为undefined 或者null")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("isUndef")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" v "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" undefined "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" v "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//相反")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("isDef")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" v "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" undefined "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" v "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * Check if value is primitive\n * 值是否为原始类型\n */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("isPrimitive")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" value "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'string'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" value "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'number'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// $flow-disable-line")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" value "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'symbol'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" value "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'boolean'")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 是否是对象")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("isObject")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" obj "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'object'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" _toString "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toString"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//获取值的原始类型 ")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v('// 例如 "[object String]" 经过slice(8,-1)获取到的是String')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("toRawType")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _toString"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("call")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("slice")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("8")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * Strict object type check. Only returns true\n * for plain JavaScript objects.\n * 简单对象（plain object），也就是用 {} 或 new Object() 创建的对象。\n */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("isPlainObject")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _toString"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("call")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'[object Object]'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//是否是正则")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("isRegExp")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _toString"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("call")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'[object RegExp]'")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * Check if val is a valid array index.\n * 是否是合法的数组索引\n */")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("isValidArrayIndex")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" n "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("parseFloat")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("String")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{attrs:{class:"token comment"}},[t._v("//isFinite用来检查一个数值是否为有限的（finite），即不是Infinity。")]),t._v("\n "),n("span",{attrs:{class:"token comment"}},[t._v("//Math.floor(2.2)===2.2 false")]),t._v("\n "),n("span",{attrs:{class:"token comment"}},[t._v("//Math.floor(2=== 2) true 判断为整数")]),t._v("\n "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n "),n("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" Math"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("floor")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" n "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("isFinite")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("/** JSON.stringify(value[, replacer [, space]])\n   *后面参数还没用过... \n   * replacer 可选\n   如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；\n   如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；\n   如果该参数为null或者未提供，则对象所有的属性都会被序列化；\n   * space 可选\n   指定缩进用的空白字符串，用于美化输出（pretty-print）；\n   如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；\n   如果该参数为字符串(字符串的前十个字母)，该字符串将被作为空格；\n   如果该参数没有提供（或者为null）将没有空格。\n\n   另外 vue 这种三元运算符的写法结构比较清晰,值得学习\n   */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("toString")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n   "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n   "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" val "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'object'")]),t._v("\n     "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("JSON")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("stringify")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("String")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//转为数字")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("toNumber")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" n "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("parseFloat")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("isNaN")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" val "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" n\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n* Remove an item from an array\n* 删除数字元素\n*/")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("remove")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" index "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("indexOf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("splice")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("/**\n * Check whether the object has the property.\n * 指示对象自身属性中是否具有指定的属性,所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。\n  这个方法可以用来检测一个对象是否含有特定的自身属性；和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。\n */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" hasOwnProperty "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hasOwnProperty"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("hasOwn")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" hasOwnProperty"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("call")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * Convert an Array-like object to a real Array.类似数组转为真数组\n */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("toArray")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  start "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" start "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" start"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ret "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Array")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{attrs:{class:"token operator"}},[t._v("--")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ret"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" start"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * Mix properties into target object. -from对象 赋给to对象\n */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("extend")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _from"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" key "),n("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" _from"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    to"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" _from"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" to\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * Always return false. 永远为false\n */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("no")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * Return same value 返回原值\n */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("identity")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// can we use __proto__? 还可以使用 Object.getPrototypeOf()")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hasProto "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'__proto__'")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// Browser environment sniffing 浏览器环检测")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" inBrowser "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" window "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'undefined'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" inWeex "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" WXEnvironment "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'undefined'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("WXEnvironment"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("platform"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" weexPlatform "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" inWeex "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" WXEnvironment"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("platform"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toLowerCase")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("UA")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" inBrowser "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" window"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("navigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userAgent"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toLowerCase")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isIE "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("UA")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/msie|trident/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("test")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("UA")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isIE9 "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("UA")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("UA")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("indexOf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'msie 9.0'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isEdge "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("UA")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("UA")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("indexOf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'edge/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isAndroid "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("UA")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("UA")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("indexOf")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'android'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weexPlatform "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'android'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isIOS "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("UA")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/iphone|ipad|ipod|ios/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("test")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("UA")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weexPlatform "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'ios'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isChrome "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("UA")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token regex"}},[t._v("/chrome\\/\\d+/")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("test")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token constant"}},[t._v("UA")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("isEdge"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v('// Firefox has a "watch" function on Object.prototype... ')]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("//火狐浏览器有个watch,做相关处理避免和vue的watch 冲突")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nativeWatch "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("watch"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("/**\n * Define a property.\n */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("def")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" enumerable"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" boolean"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("defineProperty")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    value"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" val"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    enumerable"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("enumerable"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token comment"}},[t._v("//如果不传递 enumerable 参数则代表定义的属性是不可枚举的 !!undefined ==false")]),t._v("\n    writable"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    configurable"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="2018-09-17-vue-learn.md";s.default=o.exports}}]);