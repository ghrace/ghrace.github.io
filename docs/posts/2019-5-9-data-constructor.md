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
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
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
class Node {
    constructor(data) {
        // data 包含链表项应存储的值
        this.data = data;
        // next 是指向列表中下一项的指针
        this.next = null;
        // prev 是指向列表中上一项的指针
        this.prev = null;
    }
}

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
```
## 树:Tree
一种非线性的数据结构——树（Tree），由于其存储的所有元素之间具有明显的层次特性，因此常被用来存储具有层级关系的数据，比如文件系统中的文件；也会被用来存储有序列表等。
- 在树结构中，每一个结点只有一个父结点，若一个结点无父节点，则称为树的根结点，简称树的根（root）。
- 每一个结点可以有多个子结点。
- 没有子结点的结点称为叶子结点。
- 一个结点所拥有的子结点的个数称为该结点的度。
- 所有结点中最大的度称为树的度。树的最大层次称为树的深度。

分类:
- 二叉树：Binary Search Tree
- AVL树：AVL Tree
- 红黑树：Red-Black Tree
- 线段树： Segment Tree - with min/max/sum range queries examples
- 芬威克树：Fenwick Tree (Binary Indexed Tree

二叉树
- 二叉树是一种特殊的树，它的子节点个数不超过两个。
- 且分别称为该结点的左子树（left subtree）与右子树（right subtree）。
- 二叉树常被用作二叉查找树和二叉搜索树、或是二叉排序树（BST）
按照根节点访问的顺序不同，二叉树的遍历分为以下三种：前序遍历，中序遍历，后序遍历；
### 前序遍历：Pre-Order
>根节点->左子树->右子树
### 中序遍历：In-Order
>左子树->根节点->右子树
### 后序遍历：Post-Order
>左子树->右子树->根节点
```js
class Node { 
  constructor(data) { 
    this.left = null
    this.right = null
    this.value = value
  } 
} 

class BST {
    constructor() {
        this.root = null
    }
    //新子节点
    insertNode(root, newNode) {
    if (newNode.value < root.value) {
      // 先执行无左节点操作
      (!root.left) ? root.left = newNode : this.insertNode(root.left, newNode)
    } else {
      (!root.right) ? root.right = newNode : this.insertNode(root.right, newNode)
    }
  }
  //节点
    insert(value) {
        let newNode = new Node(value)
        // 如果没有根节点
        if (!this.root) {
        this.root = newNode
        } else {
        this.insertNode(this.root, newNode)
        }
    }
      removeNode(root, value) {
        if (!root) {
        return null
        }
        
        // 从该值小于根节点开始判断
        if (value < root.value) {
            root.left = this.removeNode(root.left, value)
            return root
            } else if (value > root.value) {
            root.right = tis.removeNode(root.right, value)
            return root
        } else {
        // 如果没有左右节点
        if (!root.left && !root.right) {
            root = null
            return root
        }
        
        // 存在左节点
        if (root.left) {
            root = root.left
            return root
        // 存在右节点
        } else if (root.right) {
            root = root.right
            return root
        }
        
        // 获取正确子节点的最小值以确保我们有有效的替换
        let minRight = this.findMinNode(root.right)
        root.value = minRight.value
        // 确保删除已替换的节点
        root.right = this.removeNode(root.right, minRight.value)
        return root
        }
    }
  
    remove(value) {
        if (!this.root) {
        return 'Tree is empty!'
        } else {
        this.removeNode(this.root, value)
        }
    }
    //子节点的最小值
    findMinNode(root) {
        if (!root.left) {
        return root
        } else {
        return this.findMinNode(root.left)
        }
    }
    searchNode(root, value) {
        if (!root) {
        return null
        }
        
        if (value < root.value) {
        return this.searchNode(root.left, value)
        } else if (value > root.value) {
        return this.searchNode(root.right, value)
        }
        
        return root
    }

    search(value) {
        if (!this.root) {
        return 'Tree is empty'
        } else {
        return Boolean(this.searchNode(this.root, value))
        }
    }
    //前序遍历
    preOrder(root) {
        if (!root) {
        return 'Tree is empty'
        } else {
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
        }
    }
    inOrder(root) {
        if (!root) {
        return 'Tree is empty'
        } else {
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (!root) {
        return 'Tree is empty'
        } else {
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
        }
    }
```





}
