(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{205:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"爬虫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#爬虫"}},[t._v("#")]),t._v(" 爬虫")]),t._v(" "),a("p",[t._v("作为前端,看到很多爬虫,就被深深吸引了，因为感觉很cool！敲个回车就拼命的显示一行行数据,不一会就爬了几千张图片")]),t._v(" "),a("h3",{attrs:{id:"什么是爬虫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是爬虫"}},[t._v("#")]),t._v(" 什么是爬虫")]),t._v(" "),a("p",[t._v("网络爬虫,又被称为网页蜘蛛，网络机器人,就是自动的根据一定规则去爬虫网上的某些信息,能请求网络的语言都可以写爬虫,如node,java,python,这儿选择Python写爬虫,因为Python火啊")]),t._v(" "),a("h3",{attrs:{id:"入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[t._v("#")]),t._v(" 入门")]),t._v(" "),a("p",[t._v("首先熟悉Python语法,了解爬虫需要的相关库,"),a("code",[t._v("requests")]),t._v("是最基本的,简单例子如下")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# coding=utf-8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" requests\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" lxml "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" etree\nurl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.qiushibaike.com'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#爬取的网站 糗事百科")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#循环10页数据")]),t._v("\n    req"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/8hr/page/%d/'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#请求网站")]),t._v("\n    root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("etree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#解析")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分析网页,作为前端经常用的f12审查元素 看需要的内容是什么格式,在哪个标签 可以用xpath匹配")]),t._v("\n    p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//div[contains(@class,mb15)]/a[1]/div/span[1]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#写入结果到记事本中")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qb.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"保存图片-存数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保存图片-存数据库"}},[t._v("#")]),t._v(" 保存图片,存数据库")]),t._v(" "),a("p",[t._v("网上很多爬虫都是爬各种图片,妹子图啊,之前看到有个项目爬取抖音小姐姐,再应用图片分析,调用腾讯颜值判断接口分析图片,感觉很厉害,有没有"),a("br"),t._v("\n简单爬个豆瓣250海报图片:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# coding=utf-8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" requests\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pymongo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MongoClient\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" bs4 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" BeautifulSoup\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接本地mongodb")]),t._v("\nconn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("MongoClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("movie "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#movie库")]),t._v("\nmy_set"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("movie_set  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#movie_set 集合")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设定个请求头,模拟成浏览器方法,防止被封ip,可以放多个头部,随机调取")]),t._v("\nheaders "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User-Agent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nbase_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://movie.douban.com/top250?start='")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设定一个网址不变的部分，然后我们只要每次在这个后面加数字就可以了")]),t._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mkdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"img"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建图片文件夹")]),t._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"img"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    page"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#爬取1页数据休息1s")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# request = requests.Session()")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# request.proxies = .... 反爬虫,代理   ")]),t._v("\n    r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("base_url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&filter='")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n    soup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BeautifulSoup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lxml'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#class是python关键字,class_代替")]),t._v("\n    items"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("class_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'item'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'span'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("class_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#get_text获取文本")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        quote"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("class_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quote'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" quote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            quote"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("quote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#保存到数据库")]),t._v("\n            my_set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"quote"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("quote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    imgs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" img "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" imgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#获取alt描述信息,作为图片名字")]),t._v("\n        title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#获取图片src ")]),t._v("\n        src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#请求图片")]),t._v("\n        photo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#保存图片 'wb'写入")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wb"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("photo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);