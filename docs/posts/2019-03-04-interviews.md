## 最近面试问题

### 洗牌

```js
//从还没处理的数组（假如还剩n个）中，产生一个[0, n]之间的随机数 random
//从剩下的n个元素中把第 random 个元素取出到新数组中
//删除原数组第random个元素
//重复第 2 3 步直到所有元素取完
//最终返回一个新的打乱的数组
//时间复杂度O(n2)
function shuffle(arr) {
  let result = []
  let random
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length)
    result.push(arr[random])
    arr.splice(random, 1)
  }
  return result
}
//Fisher–Yates shuffle
Array.prototype.shuffle = function() {
  let input = this
  for (let i = input.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1))
    // [input[random], input[i]] = [input[i], input[random]];
    let itemAtIndex = input[randomIndex]
    input[randomIndex] = input[i] //swap
    input[i] = itemAtIndex
  }
  return input
}
```

利用 sort()

```js
//对于数量小的数组来说足够。因为随着数组元素增加，随机性会变差。
arr.sort(() => {
  return 0.5 - Math.random()
})
```

es6

```js
function shuffle(arr) {
  let n = arr.length
  let random
  while (0 != n) {
    random = (Math.random() * n--) >>> 0 // 无符号右移位运算符向下取整
    ;[arr[n], arr[random]] = [arr[random], arr[n]] //互换
  }
  return arr
}
```

### Array.from()

Array.from 方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）

常见的类似数组的对象是 DOM 操作返回的 NodeList 集合，以及函数内部的 arguments 对象,

```js
//key可转数字,具有length属性
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}
//es5
var arr1 = [].slice.call(arrayLike) // ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike) // ['a', 'b', 'c']
```

### v-if 和 v-for 同时

当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中,风格指南里建议永远不要把 v-if 和 v-for 同时用在同一个元素上

### Reflect 和 Proxy

Proxy 用于修改某些操作默认行为,等同于在语言层面修,对编程语言进行编程,可以理解成，在目标对象之前设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截,拦截操作共 13 种

Reflect 对象与 Proxy 对象一样,操作对象的新 API,目的是:

1. 将 Object 对象上方法放到 Reflect 上
2. 修改 Object 方法的返回结果,使其更合理,
3. 并让 Object 操作变为函数行为

### 检测类型以及深拷贝

简单版本

```js
function typeOf(obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}
function deepCopy(data) {
  const t = typeOf(data)
  let o

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}
```

更全面的深拷贝

```js
//可继续遍历数据类型
const mapTag = '[object Map]'
const setTag = '[object Set]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'
const argsTag = '[object Arguments]'
//不可继续遍历数据类型
const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const numberTag = '[object Number]'
const regexpTag = '[object RegExp]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'
const funcTag = '[object Function]'

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag]
//while 比for in 快
function forEach(arr, fn) {
  let index = -1
  const length = arr.length
  while (++index < length) {
    fn(arr[index], index)
  }
  return arr
}
function isObject(target) {
  const type = typeof target
  return target !== null && (type === 'object' || type === 'function')
}

function getType(target) {
  return Object.prototype.toString.call(target)
}
function getInit(target) {
  const Ctor = target.constructor
  return new Ctor()
}
function cloneSymbol(target) {
  return Object(Symbol.prototype.valueOf.call(target))
}
function cloneReg(target) {
  const reFlags = /\w*$/
  const res = new target.constructor(target.source, reFlags.exec(target))
  res.lastIndex = target.lastIndex
  return res
}
function cloneFunc(func) {
  const bodyReg = /(?<={)(.|\n)+(?=})/m
  const paramReg = /(?<=\().+(?=\)\s+{)/
  const funcString = func.toString()
  if (func.prototype) {
    console.log('普通函数')
    const param = paramReg.exec(funcString)
    const body = bodyReg.exec(funcString)
    if (body) {
      console.log('匹配到函数体：', body[0])
      if (param) {
        const paramArr = param[0].split(',')
        console.log('匹配到参数：', paramArr)
        return new Function(...paramArr, body[0])
      } else {
        return new Function(body[0])
      }
    } else {
      return null
    }
  } else {
    return eval(funcString)
  }
}
function cloneOtherType(target, type) {
  const Ctor = target.constructor
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(target)
    case regexpTag:
      return cloneReg(target)
    case symbolTag:
      return cloneSymbol(target)
    case funcTag:
      return cloneFunc(target)
    default:
      return null
  }
}

function clone(target, map = new WeakMap()) {
  //原始类型
  if (!isObject(target)) {
    return target
  }
  //初始化
  const type = getType(target)
  let result
  if (deepTag.includes(type)) {
    result = getInit(target, type)
  } else {
    return cloneOtherType(target, type)
  }
  //处理循环引用
  if ((map, get(target))) {
    return target
  }
  map.set(target, result)
  //set,map
  if (type === setTag) {
    target.forEach(val => {
      result.add(clone(val))
    })
    return result
  }
  if (type === mapTag) {
    target.forEach((val, k) => {
      result.set(k, clone(val))
    })
    return result
  }
  //obj,array
  const keys = type === arrayTag ? undefined : Object.keys(target)
  forEach(keys || target, (val, key) => {
    if (keys) {
      key = val
    }
    result[key] = clone(target[key], map)
  })
  return result
}
```

### 实现求和科里化

```js
function sum() {
  let args = Array.prototype.slice.call(arguments)
  function adder() {
    let newArgs = Array.prototype.slice.call(arguments)
    args = args.concat(newArgs)
    return adder //每次调用后返回自身函数对象，连续调用
  }
  adder.valueOf = function() {
    return args.reduce(function(pre, current) {
      return pre + current
    })
  }
  return adder
}
let result = sum(1)(2, 3)(4, 5).valueOf()
console.log(result)
```

1. 内存泄漏的有哪些  
   内存泄漏：指一块被分配的内存既不能使用，又不能回收，直到浏览器进程结束。  
   JavaScript 垃圾回收的机制很简单：找出不再使用的变量，然后释放掉其占用的内存，但是这个过程不是实时的，因为其开销比较大，所以垃圾回收系统（GC）会按照固定的时间间隔,周期性的执行。  
   通常情况下有两种实现方式：标记清除和引用计数。引用计数不太常用，标记清除较为常用。引用计数的含义是跟踪记录每个值被引用的次数

- 意外的全部变量
- 闭包未释放
- 没有清理的 DOM 元素引用
- 定时器或者回调
- 循环引用

2. 通过内存，解释一下基础数据类型和引用数据类型  
   栈(stack)会自动分配内存空间，会自动释放。堆(heap)动态分配的内存，大小不定也不会自动释放

- 堆：队列优先,先进先出；由操作系统自动分配释放 ，存放函数的参数值，局部变量的值等
- 栈：先进后出；动态分配的空间 一般由程序员分配释放， 若程序员不释放，程序结束时可能由 OS 回收，分配方式倒是类似于链表。

3. es5 和 es6 继承

- 原型链
- 构造函数
- 组合
- 寄生

4. babel 的编译原理  
   ES6 代码输入 ==》 babylon 进行解析 ==》 得到 AST
   ==》 plugin 用 babel-traverse 对 AST 树进行遍历转译 ==》 得到新的 AST 树
   ==》 用 babel-generator 通过 AST 树生成 ES5 代码
5. react 的虚拟 dom diff 算法的原理  
   众所周知，操作 DOM 是很耗费性能的一件事情，操作 JS 对象比操作 DOM 省时的多。

- 通过 JS 来模拟创建 DOM 对象
- 判断两个对象的差异
- 渲染差异

DOM 是多叉树的结构，如果需要完整的对比两颗树的差异，那么需要的时间复杂度会是 O(n ^ 3)，这个复杂度肯定是不能接受的。于是 React 团队优化了算法，实现了 O(n) 的复杂度来对比差异。
实现 O(n) 复杂度的关键就是只对比同层的节点，而不是跨层对比
判断差异方法步骤

- 首先从上至下，从左往右遍历对象，也就是树的深度遍历，这一步中会给每个节点添加索引，便于最后渲染差异
- 一旦节点有子元素，就去判断子元素是否有不同

6. setState 什么时候是同步 什么时候是异步
   > React 非常巧妙地用任务队列解决了这个问题，可以理解为每次 setState 函数调用都会往 React 的任务队列里放一个任务，多次 setState 调用自然会往队列里放多个任务。React 会选择时机去批量处理队列里执行任务，当批量处理开始时，React 会合并多个 setState 的操作，比如上面的三个 setState 就被合并为只更新 state 一次，也只引发一次重新渲染。

因为这个任务队列的存在，React 并不会同步更新 state，所以，在 React 中，setState 也不保证同步更新 state 中的数据。

- 在 合成事件 和 生命周期钩子(除 componentDidUpdate) 中，setState 是"异步"的

- 在 原生事件 和 setTimeout 中，setState 是同步的，可以马上获取更新后的值；  
  原因: 原生事件是浏览器本身的实现，与事务流无关，自然是同步；而 setTimeout 是放置于定时器线程中延后执行，此时事务流已结束，因此也是同步；

```js
setTimeout(() => {
  this.setState({ count: 2 }) //这会立刻引发重新渲染
  console.log(this.state.count) //这里读取的count就是2
}, 0)
```

7. react hooks
   16.8 中正式使用

- useState：传入我们所需的初始状态，返回一个常量状态以及改变状态的函数
- useEffect：第一个参数接受一个 callback，每次组件更新都会执行这个 callback，并且 callback 可以返回一个函数，该函数会在每次组件销毁前执行。如果 useEffect 内部有依赖外部的属性，并且希望依赖属性不改变就不重复执行 useEffect 的话，可以传入一个依赖数组作为第二个参数
- useRef：如果你需要有一个地方来存储变化的数据
- useCallback：如果你需要一个不会随着组件更新而重新创建的 callback

8. 发红包  
   还有点问题

```js
function redbag(count, p) {
  let left = count
  let result = new Array(p)
  let sum = 0
  for (let i = 0; i < p - 1; i++) {
    let random = +(Math.random() * left).toFixed(2)
    // if(random<0.01){
    //     random=0.01
    // }
    result[i] = random
    sum += random
    left = left - result[i]
  }
  result[p - 1] = +(count - sum).toFixed(2)
  console.log(result)
}
redbag(10, 5)
```

9. 判断括号合法性

```js
//通过栈的特性
function isValid(s) {
  const map = {
    '(': -1,
    ')': 1,
    '[': -2,
    ']': 2,
    '{': -3,
    '}': 3
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < 0) {
      stack.push(s[i])
    } else {
      let last = stack.pop()
      if (map[last] + map[s[i]] != 0) return false
    }
  }
  if (stack.length > 0) return false
  return true
}
```

10. 赋值=

```js
;(function() {
  var a = (b = 5)
})()
console.log(b)(
  //5
  // 等同于
  function() {
    b = 5
    var a = b
  }
)()
```

11. 返回字符串中连续出现的次数,如果只有一次跳过,如`aabcccaaaa`返回`a2bc3a4`

```js
//这是返回总次数,非连续的次数
function test(s1) {
  let obj = {}
  let result = ''
  let str = s1.toLowerCase()
  for (let item of str) {
    if (obj[item]) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  }
  for (let key in obj) {
    result += `${key}${obj[key] > 1 ? obj[key] : ''}`
  }
  console.log(result)
}
test('aabccccaaa')
```

12. 求和

```js
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current
  })
}
function add() {
  var sum = 0,
    len = arguments.length
  for (var i = 0; i < len; i++) {
    sum += arguments[i]
  }
  return sum
}
```

13. 多个数组并集

```js
//1
function intersect(...args) {
  if (args.length === 0) {
    return []
  }

  if (args.length === 1) {
    return args[0]
  }

  return args.reduce((result, arg) => {
    return result.filter(item => arg.includes(item))
  })
}
//2
let getMix = arr => {
  return arr.reduce((total, item, index) => {
    if (index === 0) {
      return [...total, ...item]
    } else {
      return total.filter(v => item.includes(v))
    }
  }, [])
}
//3
function intersection(...list) {
  const mapper = new Map()
  const res = []
  for (let ele of list) {
    for (let n of ele) {
      if (mapper.get(n) === void 0) {
        mapper.set(n, 1)
      } else {
        mapper.set(n, mapper.get(n) + 1)
      }
    }
  }

  for (let [k, cnt] of mapper.entries()) {
    if (cnt === list.length) res.push(k)
  }

  return res
}
```
