(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{63:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[t._v("一些"),a("code",[t._v("typescript")]),t._v("高级的类型与技术")]),t._v(" "),a("h3",{attrs:{id:"类型别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型别名","aria-hidden":"true"}},[t._v("#")]),t._v(" 类型别名")]),t._v(" "),a("p",[t._v("类型别名用来给一个类型起个新名字。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("NameResolver")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" NameOrResolver "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Name "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" NameResolver"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getName")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NameOrResolver"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Name "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" n "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'string'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("n")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"字符串字面量类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串字面量类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 字符串字面量类型")]),t._v(" "),a("p",[t._v("字符串字面量类型用来约束取值只能是某几个字符串中的一个")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//type 定了一个字符串字面量类型 EventNames")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" EventNames "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'click'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'scroll'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'mousemove'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("handleEvent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Element"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EventNames"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("handleEvent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'scroll'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 没问题")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("handleEvent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'world'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'dbclick'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 报错，event 不能为 'dbclick'")]),t._v("\n")])])]),a("h3",{attrs:{id:"元祖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元祖","aria-hidden":"true"}},[t._v("#")]),t._v(" 元祖")]),t._v(" "),a("p",[t._v("数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。想起了"),a("code",[t._v("python")]),t._v("的元组")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" xcatliu"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'Xcat Liu'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("25")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" xcatliu"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxcatliu"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Xcat Liu'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxcatliu"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("25")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxcatliu"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("slice")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxcatliu"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toFixed")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 也可以只赋值其中一项：")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型")]),t._v("\n")])])]),a("h3",{attrs:{id:"枚举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#枚举","aria-hidden":"true"}},[t._v("#")]),t._v(" 枚举")]),t._v(" "),a("p",[t._v("枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。概念来于"),a("code",[t._v("c#")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 枚举使用 enum 关键字来定义：")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" Days "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Sun"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Mon"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Tue"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Wed"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Thu"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Fri"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Sat"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：")]),t._v("\n"),a("span",{attrs:{class:"token builtin"}},[t._v("console")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Days"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"Sun"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{attrs:{class:"token builtin"}},[t._v("console")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Days"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"Mon"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\n"),a("span",{attrs:{class:"token builtin"}},[t._v("console")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Days"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Mon"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{attrs:{class:"token builtin"}},[t._v("console")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Days"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Sun"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//可以给枚举项手动赋值：")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" Days "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Sun "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("7")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Mon "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Tue"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Wed"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Thu"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Fri"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Sat"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//使用的时候需要注意，最好不要出现这种覆盖的情况。")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//手动赋值的枚举项可以不是数字，此时需要使用类型断言来让tsc无视类型检查")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" Days "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Sun "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("7")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Mon"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Tue"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Wed"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Thu"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Fri"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Sat "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token builtin"}},[t._v("any")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token string"}},[t._v('"S"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1：")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" Days "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Sun "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("7")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Mon "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1.5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Tue"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Wed"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Thu"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Fri"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Sat"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"常数项和计算所得项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常数项和计算所得项","aria-hidden":"true"}},[t._v("#")]),t._v(" 常数项和计算所得项")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v('//计算所得项 "blue".length')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" Color "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Red"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Green"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Blue "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"blue"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错：")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" Color "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Red "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"red"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Green"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Blue"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//err")]),t._v("\n")])])]),a("p",[t._v("当满足以下条件时，枚举成员被当作是常数：")]),t._v(" "),a("ul",[a("li",[t._v("不具有初始化函数并且之前的枚举成员是常数。在这种情况下，当前枚举成员的值为上一个枚举成员的值加 1。但第一个枚举元素是个例外。如果它没有初始化方法，那么它的初始值为 0。")]),t._v(" "),a("li",[t._v("枚举成员使用常数枚举表达式初始化。常数枚举表达式是 TypeScript 表达式的子集，它可以在编译阶段求值。当一个表达式满足下面条件之一时，它就是一个常数枚举表达式：\n"),a("ul",[a("li",[t._v("数字字面量")]),t._v(" "),a("li",[t._v("引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的）如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用")]),t._v(" "),a("li",[t._v("带括号的常数枚举表达式")]),t._v(" "),a("li",[a("code",[t._v("+, -, ~")]),t._v("一元运算符应用于常数枚举表达式")]),t._v(" "),a("li",[a("code",[t._v("+, -, *, /, %, <<, >>, >>>, &, |, ^")]),t._v(" 二元运算符，常数枚举表达式做为其一个操作对象。若常数枚举表达式求值后为"),a("code",[t._v("NaN")]),t._v("或"),a("code",[t._v("Infinity")]),t._v("，则会在编译阶段报错")])])])]),t._v(" "),a("p",[t._v("所有其它情况的枚举成员被当作是需要计算得出的值。")]),t._v(" "),a("h4",{attrs:{id:"常数枚举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常数枚举","aria-hidden":"true"}},[t._v("#")]),t._v(" 常数枚举")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" Directions "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Up"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Down"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Left"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Right\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" directions "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Directions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Up"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Directions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Down"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Directions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Left"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Directions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Right"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。")]),t._v("\n")])])]),a("h4",{attrs:{id:"外部枚举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部枚举","aria-hidden":"true"}},[t._v("#")]),t._v(" 外部枚举")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" Directions "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Up"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Down"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Left"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Right\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" directions "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Directions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Up"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Directions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Down"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Directions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Left"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Directions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Right"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//declare const 可以同时出现")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" Directions "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Up"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Down"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Left"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Right\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" directions "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Directions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Up"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Directions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Down"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Directions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Left"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Directions"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Right"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//结果")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" directions "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* Up */")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* Down */")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* Left */")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/* Right */")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="2018-09-04-typescript-advanced1.md";s.default=o.exports}}]);