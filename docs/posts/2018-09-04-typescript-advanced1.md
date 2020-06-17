## ts高级1

一些`typescript`高级的类型与技术
### 类型别名  

类型别名用来给一个类型起个新名字。

```ts
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```
### 字符串字面量类型  

字符串字面量类型用来约束取值只能是某几个字符串中的一个  
```ts
//type 定了一个字符串字面量类型 EventNames
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'
```

### 元祖  

数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。想起了`python`的元组

```ts
let xcatliu: [string, number] = ['Xcat Liu', 25];
let xcatliu: [string, number];
xcatliu[0] = 'Xcat Liu';
xcatliu[1] = 25;
xcatliu[0].slice(1);
xcatliu[1].toFixed(2);
// 也可以只赋值其中一项：
// 添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
```

### 枚举  

枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。概念来于`c#`

```ts
// 枚举使用 enum 关键字来定义：
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
//枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true

console.log(Days[1] === "Mon"); // true
console.log(Days[0] === "Sun"); // true
//可以给枚举项手动赋值：
enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
//未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的
//使用的时候需要注意，最好不要出现这种覆盖的情况。
//手动赋值的枚举项可以不是数字，此时需要使用类型断言来让tsc无视类型检查
enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};
//手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1：
enum Days {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};
```

#### 常数项和计算所得项  

```ts
//计算所得项 "blue".length
enum Color {Red, Green, Blue = "blue".length};
//如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错：
enum Color {Red = "red".length, Green, Blue};//err
```

当满足以下条件时，枚举成员被当作是常数：

- 不具有初始化函数并且之前的枚举成员是常数。在这种情况下，当前枚举成员的值为上一个枚举成员的值加 1。但第一个枚举元素是个例外。如果它没有初始化方法，那么它的初始值为 0。
- 枚举成员使用常数枚举表达式初始化。常数枚举表达式是 TypeScript 表达式的子集，它可以在编译阶段求值。当一个表达式满足下面条件之一时，它就是一个常数枚举表达式：
    - 数字字面量
    - 引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的）如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用
    - 带括号的常数枚举表达式
    - `+, -, ~ `一元运算符应用于常数枚举表达式
    - `+, -, *, /, %, <<, >>, >>>, &, |, ^` 二元运算符，常数枚举表达式做为其一个操作对象。若常数枚举表达式求值后为`NaN`或`Infinity`，则会在编译阶段报错

所有其它情况的枚举成员被当作是需要计算得出的值。

#### 常数枚举

```ts
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
//常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
```

#### 外部枚举

```ts
//外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
//declare const 可以同时出现
declare const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
//结果
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
```
