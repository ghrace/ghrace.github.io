## ts基础

看到用的iview3.1版本要支持`typescript`,觉得现在UI都开始支持`ts`,是该了解一波

#### 原始数据类型  
包括:布尔值、数值、字符串、null、undefined 以及 ES6 Symbol。
```ts
let isDone: boolean = false;
// number string null undefined 
//可以用 void 表示没有任何返回值的函数
function sayname(): void {
    alert('Tom');
}
```
#### 任意值  
`any` 表示允许赋值为任意类型。

```ts
let num: any = 'seven';
num = 7;
//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
```

#### 联合类型  
表示取值可以为多种类型中的一种

```ts
let num: string | number;
num = 'seven';
num = 7;
```

#### 接口  
接口（Interfaces）来定义对象的类型

```ts
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
//约束了 tom 的形状必须和接口 Person 一致
// 定义的变量比接口少了一些属性是不允许的：多一些属性也是不允许的：
//可选属性
interface Person {
    name: string;
    age?: number;
}
//仍然不允许添加未定义的属性：
let tom: Person = {
    name: 'Tom'
};
//任意属性
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}
let tom: Person = {
    name: 'Tom',
    gender: 'male',
    age:23
};
//一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性：
//任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了
//只读属性 readonly 
interface Person {
    readonly id: number;
}
let tom: Person = {
    id: 89757,
};
tom.id = 9527;//error
```

#### 数组  
类型+方括号  

```ts
let fibonacci: number[] = [1, 1, 2, 3, 5];
//泛型
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
//接口
interface NumberArray {
    [index: number]: number;
}
//只要 index 的类型是 number，那么值的类型必须是 number。
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
//any
let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];
//类数组
//常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function sum() {
    let args: IArguments = arguments;
}
```

#### 函数
```ts
//可选参数必须接在必需参数后面,TypeScript 会将添加了默认值的参数识别为可选参数,此时就不受「可选参数必须接在必需参数后面」的限制了
function sum(x: number, y: number,z?:number): number {//?可选
    return x + y;
}
//输入多余的（或者少于要求的）参数，是不被允许的
//TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
//rest参数,是数组
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}
```
#### 类型断言  
手动指定一个值的类型  

```ts
//1. <类型>值
//2. 值 as 类型 //tsx 语法（React 的 jsx 语法的 ts 版）中必须用这一种
//类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
```

#### 声明

```ts
//声明语句
declare var jQuery: (selector: string) => any;
jQuery('#foo');
//声明文件
// jQuery.d.ts
declare var jQuery: (arg:string) => any;
//约定声明文件以 .d.ts 为后缀,使用到的文件的开头，用「三斜线指令」表示引用了声明文件
/// <reference path="./jQuery.d.ts" />
jQuery('#foo');
//第三方文件
// @types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：
npm install @types/jquery --save-dev
```

#### 内置对象  
JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。
内置对象是指根据标准在全局作用域（Global）上存在的对象

```ts
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
//BOM DOM对象 Document、HTMLElement、Event、NodeList
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});
//ts 写node
//npm install @types/node --save-dev
```