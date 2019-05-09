## 什么是数据结构
数据结构是在计算机中组织和存储数据的一种特殊方式，使得数据可以高效地被访问和修改。数据结构是数据值的集合

1. 常见数据结构
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

2. 堆栈：Stack
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
3. 队列：Queue
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