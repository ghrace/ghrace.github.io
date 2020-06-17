## ts高级2

### 类Class  

TypeScript 除了实现了所有 ES6 中的类的功能以外，还添加了一些新的用法。

#### 类的概念

- 类(Class)：定义了一件事物的抽象特点，包含它的属性和方法
- 对象（Object）：类的实例，通过 new 生成
- 面向对象（OOP）的三大特性：封装、继承、多态
- 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
- 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
- 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
- 存取器（getter & setter）：用以改变属性的读取和赋值行为
- 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
- 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
- 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口

#### TypeScript 中类的用法  

访问修饰符（Access Modifiers）,`public`、`private` 和 `protected` 

- public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
- private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
- protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

```ts
class Animal {
    private name;//不能继承访问
    protected age;
    public constructor(name,age) {
        this.name = name;
        this.age=age
    }
}
let a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';
```

##### 抽象类  

abstract 用于定义抽象类和其中的抽象方法。
```ts
//抽象类是不允许被实例化的：
abstract class Animal {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}
let a = new Animal('Jack');//err
//抽象类中的抽象方法必须被子类实现
abstract class Animal {
    public name:string;
    public constructor(name:string) {
        this.name = name;
    }
    public abstract sayHi();
}
//类加上 TypeScript 的类型很简单，与接口类似：
class Cat extends Animal {
    //实现了抽象方法 sayHi
    public sayHi():string {
        console.log(`Meow, My name is ${this.name}`);
    }
}
let cat = new Cat('Tom');
```

#### 类与接口  

接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述,接口的另一个用途，对类的一部分行为进行抽象。

##### 类实现接口  

有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性

```ts
interface Alarm {
    alert();
}
interface Light {
    lightOn();
    lightOff();
}
//一个类可以实现多个接口
class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}
```

##### 接口继承接口  

接口与接口之间可以是继承关系：

```ts
interface Alarm {
    alert();
}
// extends 使 LightableAlarm 继承 Alarm
interface LightableAlarm extends Alarm {
    lightOn();
    lightOff();
}
```

##### 接口继承类  

接口也可以继承类:
```ts
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}
let point3d: Point3d = {x: 1, y: 2, z: 3};
```

##### 混合类型

```ts
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

### 泛型

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

```ts
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
//<T>，其中 T 用来指代任意输入的类型
//调用时指定它具体的类型为 string,也可以不手动指定，而让类型推论自动推算出来
createArray<string>(3, 'x'); // ['x', 'x', 'x']
//可以定义多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]
//泛型约束
//函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);
    return arg;
}
//error 泛型 T 不一定包含属性 length

//interface 泛型
interface CreateArrayFunc<T> {
    (length: number, value: T): Array<T>;
}
let createArray: CreateArrayFunc<any>;
createArray = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray(3, 'x'); // ['x', 'x', 'x']

//泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();

//默认类型
function createArray<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
```

### 声明合并

```ts
// 函数的合并
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
//接口合并
//合并的属性的类型必须是唯一的：
interface Alarm {
    price: number;
    weight: number;
}
// 类的合并
// 类的合并与接口的合并规则一致。
```
