## 什么是数据结构
数据结构是在计算机中组织和存储数据的一种特殊方式，使得数据可以高效地被访问和修改。数据结构是数据值的集合

## 常见数据结构
   1. 数组：`Array`
   2. 堆栈：`stack`
   3. 队列：`Queue`
   4. 链表：`Linked Lists`
   5. 树：`Trees`
   6. 图：`Graphs`
   7. 字典树：`Trie`
   8. 散列表（哈希表）：`Hash Tables`

可分为三类：
- 堆栈和队列类似数组，插入和删除有所不同
- 链表，树和图的结构的节点引用其他节点
- 散列表依赖于散列函数保持和定位数据

复杂性：
- 堆栈和队列是最简单的，并且可以从中构建链表。
- 树和图 是最复杂的，因为它们扩展了链表的概念。
- 散列表和字典树 需要利用这些数据结构来可靠地执行。
  
效率：
- 链表是记录和存储数据的最佳选择
- 哈希表和字典树 在搜索和检索数据方面效果最佳。

## 堆栈：Stack
遵循`Last In，First Out`，即：LIFO，后进先出。使用示例：
- 浏览器历史记录
- 撤消操作
- 递归以及其它。
```js
class Stack{
    constructor(...items){
        this.stack=[...items]
    }
    push(...items){
        this.stack.push(...items)
    }
    pop(){
        return this.stack.pop()
    }
}
```
## 队列：Queue
前端开发中，最常用当属浏览器/NodeJs中 关于宏任务与微任务，遵循`Fist In，first out`即：FIFO，先进先出。
```js
class Queue{
    constructor(...items){
        this.queue=[...items]
    }
    enQueue(...items){
        this.queue.unshift(...items)
    }
    deQueue(){
        this.queue.pop()
    }
} 
```
## 链表: Linked Lists
与数组一样，链表是按顺序存储数据元素,链表不是保留索引，而是指向其他元素,第一个节点称为头部(head)，而最后一个节点称为尾部(tail)  
单双链表:
- 单链表是表示一系列节点的数据结构，其中每个节点指向列表中的下一个节点
- 双向链表具有指向其前后元素的节点
链表优缺点:
- 链接具有常量时间 插入和删除，因为我们可以只更改指针,可以作为堆栈运行
- 链表通常需要遍历整个操作列表，因此性能较差
应用场景:  
 链接列表在客户端和服务器上都很有用,在客户端上，像Redux就以链表方式构建其中的逻,React 核心算法 React Fiber的实现就是链表  

核心操作有:
- push（value） - 在链表的末尾/头部添加一个节点
- pop（） - 从链表的末尾/头部删除一个节点
- get（index） - 返回指定索引处的节点
- delete（index） - 删除指定索引处的节点
- isEmpty（） - 根据列表长度返回true或false
- print（） - 返回链表的可见表示
1. 单链表
```js
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    // 长度非必要
    this.length = 0
  }
  push(data) {
    // 创建一个新节点
    const node = new Node(data)
    // 检查头部是否为空
    if (this.head === null) {
      this.head = node
      this.tail = node
    } 
    this.tail.next = node
    this.tail = node
    this.length++
  }
  pop(){
    // 先检查链表是否为空
    if(this.isEmpty()) {
      return null
    } 
    // 如果长度为1
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      this.length--
      return this.tail
    }
    let node = this.tail
    let currentNode = this.head
    let penultimate
    
    while (currentNode) {
      if (currentNode.next === this.tail) {
        penultimate = currentNode
        break
      }
      currentNode = currentNode.next
    }
    
    penultimate.next = null
    this.tail = penultimate
    this.length --
    return node
  }
  
  get(index){
    // 处理边界条件
    if (index === 0) {
      return this.head
    }
    if (index < 0 || index > this.length) {
      return null
    }
    
    let currentNode = this.head
    let i = 0
    while(i < index) {
      i++
      currentNode = currentNode.next
    }
    return currentNode
    
  }
  delete(index){
    let currentNode = this.head
    
    if (index === 0) {
      let deletedNode
      currentNode.next = this.head
      deletedNode = currentNode
      this.length--
      
      return deletedNode
    }
    
    if (index < 0 || index > this.length) {
      return null
    }
    
    let i = 0
    let previous
    
    while(i < index) {
      i++
      previous = currentNode
      currentNode = currentNode.next
    }
    previous.next = currentNode.next
    this.length--
    return currentNode
  }
  
  isEmpty() {
    return this.length === 0
  }
  print() {
    const list = []
    let currentNode = this.head
    while(currentNode){
      list.push(currentNode.data)
      currentNode = currentNode.next
    }
    return list.join(' => ')
  }
}
```
2. 双链表
```js
class DoubleLink {
    constructor(data) {
        // data 包含链表项应存储的值
        this.data = data;
        this.head  = null;
        this.tail  = null;
    }
//append 尾部添加
    append( item ) {
        let node = new Node( item );
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node
        }
    }
//指定位置添加节点
    appendAt( pos, item ) {
        let current = this.head;
        let counter = 1;
        let node = new Node( item );
        if( pos == 0 ) {
            this.head.prev = node
            node.next = this.head
            this.head = node
        } else {
            while(current) {
            current = current.next;
            if( counter == pos ) {
                node.prev = current.prev
                current.prev.next = node
                node.next = current
                current.prev = node
            }
            counter++
            }
        }
    }
//尾部删除
    remove( item ) {
        let current = this.head;
        while( current ) {
            if( current.data === item ) {
            if( current == this.head && current == this.tail ) {
                this.head = null;
                this.tail = null;
            } else if ( current == this.head ) {
                this.head = this.head.next
                this.head.prev = null
            } else if ( current == this.tail ) {
                this.tail = this.tail.prev;
                this.tail.next = null;
            } else {
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
        }
        current = current.next
        }
    }
//指定位置删除
    removeAt( pos ) {
            let current = this.head;
            let counter = 1;
            if( pos == 0 ) {
            this.head = this.head.next;
            this.head.prev = null;
            } else {
            while( current ) {
                current = current.next
                if ( current == this.tail ) {
                this.tail = this.tail.prev;
                this.tail.next = null;
                } else if( counter == pos ) {
                current.prev.next = current.next;
                current.next.prev = current.prev;
                break;
                }
                counter++;
            }
        }
    }
//翻转
    reverse(){
        let current = this.head;
        let prev = null;
        while( current ){
            let next = current.next
            current.next = prev
            current.prev = next
            prev = current
            current = next
        }
        this.tail = this.head
        this.head = prev
    }
//节点交换
    swap( nodeOne, nodeTwo ) {
        let current = this.head;
        let counter = 0;
        let firstNode;
        while( current !== null ) {
            if( counter == nodeOne ){
            firstNode = current;
            } else if( counter == nodeTwo ) {
            let temp = current.data;
            current.data = firstNode.data;
            firstNode.data = temp;
            }
            current = current.next;
            counter++;
        }
        return true
    }

    length() {
        let current = this.head;
        let counter = 0;
        while( current !== null ) {
        counter++
        current = current.next
        }
        return counter;
    }

    isEmpty() {
        return this.length() < 1
    }
//遍历
    traverse( fn ) {
        let current = this.head;
        while( current !== null ) {
            fn(current)
            current = current.next;
        }
        return true;
    }
//查找节点索引
    search( item ) {
        let current = this.head;
        let counter = 0;
        while( current ) {
            if( current.data == item ) {
            return counter
            }
            current = current.next
            counter++
        }
        return false;
    }
}
