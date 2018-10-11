(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{90:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("p",[s._v("es6 学习笔记(1):")]),s._v(" "),a("h2",{attrs:{id:"es6-声明变量-六种方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-声明变量-六种方法","aria-hidden":"true"}},[s._v("#")]),s._v(" es6 声明变量 六种方法")]),s._v(" "),a("ul",[a("li",[s._v("var")]),s._v(" "),a("li",[s._v("function")]),s._v(" "),a("li",[s._v("let")]),s._v(" "),a("li",[s._v("const  必须初始化")]),s._v(" "),a("li",[s._v("import")]),s._v(" "),a("li",[s._v("class")])]),s._v(" "),a("p",[s._v("const :  const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。")]),s._v(" "),a("p",[s._v("let const 声明的不在window属性中")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" b"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" c"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token number"}},[s._v("3")]),s._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("window"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{attrs:{class:"token comment"}},[s._v("//1")]),s._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("window"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{attrs:{class:"token comment"}},[s._v("//undefined")]),s._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("log")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("window"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{attrs:{class:"token comment"}},[s._v("//undefined")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"解构赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解构赋值","aria-hidden":"true"}},[s._v("#")]),s._v(" 解构赋值")]),s._v(" "),a("ol",[a("li",[s._v("ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("x "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token keyword"}},[s._v("null")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nx "),a("span",{attrs:{class:"token comment"}},[s._v("// null")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串","aria-hidden":"true"}},[s._v("#")]),s._v(" 字符串")]),s._v(" "),a("ol",[a("li",[s._v("ES6 为字符串添加了遍历器接口,可以使用"),a("code",[s._v("for...of")]),s._v("循环遍历")]),s._v(" "),a("li",[a("ul",[a("li",[s._v("includes(): 找到返回true")]),s._v(" "),a("li",[s._v("startWith(): 字符串是否在原字符串的头部")]),s._v(" "),a("li",[s._v("endWith(): 字符串是否在原字符串的尾部")])])]),s._v(" "),a("li",[s._v("repeat() 重复")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token string"}},[s._v("'hello'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("repeat")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token comment"}},[s._v("//'hellohello'")]),s._v("\n"),a("span",{attrs:{class:"token string"}},[s._v("'na'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("repeat")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("2.8")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token comment"}},[s._v("//'nana'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("padStart()，padEnd()\n如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token string"}},[s._v("'x'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("padEnd")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("5")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'ab'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 'xabab'")]),s._v("\n"),a("span",{attrs:{class:"token string"}},[s._v("'x'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("padEnd")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("4")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'ab'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 'xaba'")]),s._v("\n"),a("span",{attrs:{class:"token string"}},[s._v("'xxx'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("padEnd")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'ab'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 'xxx'")]),s._v("\n"),a("span",{attrs:{class:"token string"}},[s._v("'x'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("padStart")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("4")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// '   x' 没有第二个参数用空格补全")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//用途")]),s._v("\n"),a("span",{attrs:{class:"token string"}},[s._v("'1'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("padStart")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'0'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("//日期补0 1=>01")]),s._v("\n"),a("span",{attrs:{class:"token string"}},[s._v("'1'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("padStart")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'0'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v('// "0000000001" 用途补全数值')]),s._v("\n"),a("span",{attrs:{class:"token string"}},[s._v("'09-12'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("padStart")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'YYYY-MM-DD'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v('// "YYYY-09-12"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("模板字符串")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[s._v("`Hello ")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),a("span",{attrs:{class:"token string"}},[s._v("'World'")]),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{attrs:{class:"token string"}},[s._v("`")])]),s._v("  "),a("span",{attrs:{class:"token comment"}},[s._v("//${}放变量或者任意的js表达式,还能调用函数 可嵌套")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v('// "Hello World"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}],!1,null,null,null);e.options.__file="2018-08-07-es6-note1.md";t.default=e.exports}}]);