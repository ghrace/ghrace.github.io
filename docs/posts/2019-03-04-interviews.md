## 最近面试问题总结

### 洗牌
```js
//从还没处理的数组（假如还剩n个）中，产生一个[0, n]之间的随机数 random
//从剩下的n个元素中把第 random 个元素取出到新数组中
//删除原数组第random个元素
//重复第 2 3 步直到所有元素取完
//最终返回一个新的打乱的数组
//时间复杂度O(n2)
function shuffle(arr){
    let result = [];
    let random;
    while(arr.length>0){
        random = Math.floor(Math.random() * arr.length);
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result;
}
//Fisher–Yates shuffle 
Array.prototype.shuffle = function() {
    let input = this;
    for (let i = input.length-1; i >=0; i--) {
        let randomIndex = Math.floor(Math.random()*(i+1));
        let itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];//swap
        input[i] = itemAtIndex;
    }
    return input;
}
```
利用sort()
```js
//对于数量小的数组来说足够。因为随着数组元素增加，随机性会变差。
arr.sort(()=>{
    return 0.5 - Math.random();
})
```
es6
```js
function shuffle(arr){
    let n = arr.length;
    let random;
    while(0!=n){
        random =  (Math.random() * n--) >>> 0; // 无符号右移位运算符向下取整
        [arr[n], arr[random]] = [arr[random], arr[n]] //互换
    }
    return arr;
}
```
### Array.from()
Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）

常见的类似数组的对象是 DOM 操作返回的 NodeList 集合，以及函数内部的arguments对象,
```js
//key可转数字,具有length属性
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
//es5
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

### v-if 和 v-for同时
当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中,风格指南里建议永远不要把 v-if 和 v-for 同时用在同一个元素上
### Reflect 和 Proxy
Proxy 用于修改某些操作默认行为,等同于在语言层面修,对编程语言进行编程,可以理解成，在目标对象之前设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截,拦截操作共13种

Reflect对象与Proxy对象一样,操作对象的新API,目的是:

1. 将Object对象上方法放到Reflect上
2. 修改Object方法的返回结果,使其更合理,
3. 并让Object操作变为函数行为
### 检测类型以及深拷贝
```js
function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]'  : 'boolean',
    '[object Number]'   : 'number',
    '[object String]'   : 'string',
    '[object Function]' : 'function',
    '[object Array]'    : 'array',
    '[object Date]'     : 'date',
    '[object RegExp]'   : 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]'     : 'null',
    '[object Object]'   : 'object'
  };
  return map[toString.call(obj)];
}
function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === 'array') {
    o = [];
  } else if ( t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if ( t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}
```
### 实现求和科里化
```js
function sum() {
  let args = Array.prototype.slice.call(arguments);
  function adder() {
    let newArgs = Array.prototype.slice.call(arguments);
    args = args.concat(newArgs);
    return adder;   //每次调用后返回自身函数对象，连续调用
  }
  adder.valueOf = function () {
    return args.reduce(function (pre, current) {
      return pre + current;
    });
  }
  return adder;
}
let result = sum(1)(2, 3)(4, 5).valueOf()
console.log(result)
```