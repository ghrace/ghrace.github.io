面试一些常见问题
## css

1. **1px问题(0.5px的线)**  
利用transform:scaleY(0.5)使用伪元素设置1px边框,然后进行缩放
2. **不定高的div居中**
    1. flex
    ```css
    .father{
        display:flex;
        justify-content:center;
        aligh-items:center
    }
    ```
    2. css transform
    ```css
    .div{
        transform: translate(-50%，-50%);
        position: absolute;
        top: 50%;
        left: 50%;
    }
    ```
    3. display:table-cell
    ```css
    .father{
        display:table-cell;
        text-align:center;
        vertical-align:middle;
    }
    .div{
        display:inline-block;
        vertical-align:middle;
    }
    ```
3. **清除浮动**
```
1.给父级元素定义高度 
2.让父级元素也浮动 
3.父级定义display:table 
4.父元素设置overflow:hidden 
5.clearfix:使用内容生成的方式清除浮动
	.clearfix:after {  // :after选择器向选定的元素之后插入内容
   		    content:""; // 生成内容为空
   		    display: block; // 块级元素显示
   		    clear:both; // 清除前面元素
	}
不破坏文档流，没有副作用
6.空div clear:both
```

4. **css优先级**  
!important > 行内样式 > ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性
5. **行内元素,块元素**
    - 块元素独占一行,宽度自动填满父元素宽度,div,p,form,ul,li h1-h6
    - 行内元素没有宽度,高度属性,span,img,a
6. **画三角形**
设宽高,border
```css
.div{
    width: 0;
    height: 0;
    border-bottom: 100px solid cyan;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
}
```
7. **元素消失**
    1. visibility:hidden 不改变布局,不触发绑定事件
    2. opacity:0 不改变布局,触发事件
    3. display:none 改变布局,类似删除元素
    4. z-index=-1 层次
8. **布局**
    1. 三栏(两边宽度固定，中间宽度自适应)
        * position定位 center放最后 margin流出左右宽度
        * float center放最后 margin指定左右边距,定位
        * 圣杯布局 (margin负值法).center包含div,设置float,宽度和margin的负值匹配
    2. 左边定宽,右边自适应
        * 左浮动,右100%
        * 左浮动,`.right{width:cacl(100vw-200px)}`
        * 父`display:flex`,右`flex:1`
9. **BFC**  
BFC是css布局的一个概念，是一块独立的渲染区域，一个环境，里面的元素不会影响到外部的元素
    * 如何生成BFC：（脱离文档流）
        1. 根元素，即HTML元素（最大的一个BFC）
        2. float的值不为none
        3. position的值为absolute或fixed
        4. overflow的值不为visible（默认值。内容不会被修剪，会呈现在元素框之外）
        5. display的值为inline-block、table-cell、table-caption
    * BFC布局规则：
        1. 内部的Box会在垂直方向，一个接一个地放置。
	    2. 属于同一个BFC的两个相邻的Box的margin会发生重叠
	    3. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此, 文字环绕效果，设置float
	    4. BFC的区域不会与float box重叠。
	    5. 计算BFC的高度，浮动元素也参与计算
    * BFC作用：
        1. 自适应两栏布局
        2. 可以阻止元素被浮动元素覆盖
        3. 可以包含浮动元素---清除内部浮动 原理:：触发父div的BFC属性，使下面的子div都处在父div的同一个BFC区域之内
        4. 分属于不同的BFC时，可以阻止margin重叠
## JS
1. **事件**  
IE 冒泡和默认
    ```js
    e.stopPropagation()//冒泡
    window.event.cancelBubble = true;//ie
    e.preventDefault();//默认
    window.event.returnValue = false;//ie
    ```
2. **this**  
几种情况:
    1. 当函数作为对象的方法被调用时，this指向该对象。
    2. 作为普通函数，this指向window。node环境 global
    3. 构造器调用，this指向返回的这个对象。
    4. 箭头函数  箭头函数的this绑定看的是this所在函数定义在哪个对象下，就绑定哪个对象。如果有嵌套的情况，则this绑定到最近的一层对象上
    改变this指向:
    1. 箭头函数
    2. self=this
    3. apply,call,bind
    4. new 对象
3. **跨越**
    1. jsonp
    2. document.domin 基础域名相同,子域名不同
    3. window.name 同意浏览器窗口,共享一个window.name
    4. cors 服务器设置 Access-Control-Allow-Origin*
    5. window.postMessage()
4. **检验类型**
    * typeOf()适合基本类型 Boolean,Number，symbol, undefined, String
    * instanceOf() 检查A是否是B的实例e,检查的是原型
    * Object.prototype.toString.call() 
    * Array.isArray() 判断数组
    * hasOwnProperty() 指示对象自身属性中是否具有指定的属性,会忽略从原型链上继承的属性
    
5. **类型转换**  
```js
//转换成 string 时，使用 + ''
num+'';
//转换成 number 时，通常使用 +
+'1'  //1
//使用 parseInt 时，必须指定进制
// good
parseInt(str, 10);
// 转换成 boolean 时，使用 !!。
let num=2.3
!!num  //true
```
## 拷贝
### 浅拷贝 
- `Object.assign` 
- (...)扩展运算符
### 深拷贝
通常可以通过 `JSON.parse(JSON.stringify(object))`解决  
有局限性:
- 忽略`undefined`
- 不能序列化函数
- 不能解决循环引用的对象

拷贝的对象含有内置类型并且不包含函数，可以使用 `MessageChannel`
```js
function structuralClone(obj) {
  return new Promise(resolve => {
    const {port1, port2} = new MessageChannel();
    port2.onmessage = ev => resolve(ev.data);
    port1.postMessage(obj);
  });
}

let obj = {a: 1, b: {
    c: undefined
}}
// 注意该方法是异步的
// 可以处理 undefined 和循环引用对象
const clone = await structuralClone(obj);
```
## 如何渲染几万数据不卡住界面
不能一次性将几万条都渲染出来，而应该一次渲染部分 DOM，那么就可以通过 requestAnimationFrame 来每 16 ms 刷新一次
```js
setTimeout(() => {
      // 插入十万条数据
      const total = 100000
      // 一次插入 20 条，如果觉得性能不好就减少
      const once = 20
      // 渲染数据总共需要几次
      const loopCount = total / once
      let countOfRender = 0
      let ul = document.querySelector("ul");
      function add() {
        // 优化性能，插入不会造成回流
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < once; i++) {
          const li = document.createElement("li");
          li.innerText = Math.floor(Math.random() * total);
          fragment.appendChild(li);
        }
        ul.appendChild(fragment);
        countOfRender += 1;
        loop();
      }
      function loop() {
        if (countOfRender < loopCount) {
          window.requestAnimationFrame(add);
        }
      }
      loop();
    }, 0);
```

## 优化
![优化](../img/better.jpg 'better')
