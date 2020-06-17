## 数据结构
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
## 图:Graph
图是由具有边的节点集合组成的数据结构。图可以是定向的或不定向的  
- GPS系统和谷歌地图使用图表来查找从一个目的地到另一个目的地的最短路径。
- 社交网络使用图表来表示用户之间的连接。
- Google搜索算法使用图 来确定搜索结果的相关性。
- 运营研究是一个使用图 来寻找降低运输和交付货物和服务成本的最佳途径的领域。
- 化学使用图 来表示分子！
1. 图的基本元素
   - 节点:Node
   - 边:Edge
2. 符号
   - `|V|` 图中顶点(节点)总数
   - `|E|` 图中的连接总数(边)
3. 有向图和无向图
- 有向图中，边具有方向。它们从一个节点转到另一个节点，并且无法通过该边返回到初始节点,将这些边视为单行道
- 无向图中,边是无向的（它们没有特定的方向）。将无向边视为双向街道
- 加权图中,每条边都有一个与之相关的值（称为权重）。该值用于表示它们连接的节点之间的某种可量化关系
  - 权重可以表示距离，时间，社交网络中两个用户之间共享的连接数
  - 可以用于描述您正在使用的上下文中的节点之间的连接的任何内容
4. 稀疏图与密集图
   - 当图中的边数接近最大边数时，图是密集的
   - 当图中的边数明显少于最大边数时，图是稀疏的
5. 循环
它们是在同一节点上开始和结束的有效路径
```js
// 具有邻接列表的有向图
class Graph {
  constructor() {
    this.AdjList = new Map();
  }
  //添加顶点
  addVertex(vertex) {
    if (!this.AdjList.has(vertex)) {
        this.AdjList.set(vertex, []);
    } else {
        throw 'Already Exist!!!';
    }
  }
  //添加边
   addEdge(vertex, node) {
        // 向顶点添加边之前，必须验证该顶点是否存在。
        if (this.AdjList.has(vertex)) {
        // 确保添加的边尚不存在。
            if (this.AdjList.has(node)){
                let arr = this.AdjList.get(vertex);
                // 如果都通过，那么可以将边添加到顶点。
                if(!arr.includes(node)){
                arr.push(node);
                }
            }else {
                throw `Can't add non-existing vertex ->'${node}'`;
            }
            } else {
            throw `You should add '${vertex}' first`;
            }
    }
    print() {
        for (let [key, value] of this.AdjList) {
            console.log(key, value);
        }
    }
}
```
* 广度优先算法，BFS。
* 深度优先算法，DFS
* BFS 的重点在于队列，而 DFS 的重点在于递归。这是它们的本质区别。
### BFS
步骤
+ BFS将起始节点作为参数。（例如'A'）
+ 初始化一个空对象：visited。
+ 初始化一个空数组：q，该数组将用作队列。
+ 将起始节点标记为已访问。（visited = {'A': true}）
+ 将起始节点放入队列中。（q = ['A']）
+ 循环直到队列为空 
循环内部
- 从中获取元素q并将其存储在变量中。（let current = q.pop()）
- 打印 当前 current
- 从图中获取current的边。（let arr = this.AdjList.get(current)）。
- 如果未访问元素，则将每个元素标记为已访问并将其放入队列中。
```js
createVisitedObject(){
  let arr = {};
  for(let key of this.AdjList.keys()){
    arr[key] = false;
  }
  return arr;
}

bfs(startingNode){
  let visited = this.createVisitedObject();
  let q = [];

  visited[startingNode] = true;
  q.push(startingNode);

  while(q.length){
    let current = q.pop()
    console.log(current);

    let arr = this.AdjList.get(current);

    for(let elem of arr){
      if(!visited[elem]){
        visited[elem] = true;
        q.unshift(elem)
      }
    }

  }
}
```
### DFS
步骤
- 接受起点作为参数`dfs(startingNode)` 。
- 创建访问对象`let visited = this.createVisitedObject()`。
- 调用辅助函数递归起始节点和访问对象`this.dfsHelper(startingNode, visited)`。
- dfsHelper 将其标记为已访问并打印出来。
```js
createVisitedObject(){
  let arr = {};
  for(let key of this.AdjList.keys()){
    arr[key] = false;
  }
  return arr;
}

 dfs(startingNode){
    console.log('\nDFS')
    let visited = this.createVisitedObject();
    this.dfsHelper(startingNode, visited);
  }

  dfsHelper(startingNode, visited){
    visited[startingNode] = true;
    console.log(startingNode);

    let arr = this.AdjList.get(startingNode);

    for(let elem of arr){
      if(!visited[elem]){
        this.dfsHelper(elem, visited);
      }
    }
  }

  doesPathExist(firstNode, secondNode){
    let path = [];
    let visited = this.createVisitedObject();
    let q = [];
    visited[firstNode] = true;
    q.push(firstNode);
    while(q.length){
      let node = q.pop();
      path.push(node);
      let elements = this.AdjList.get(node);
      if(elements.includes(secondNode)){
        console.log(path.join('->'))
        return true;
      }else{
        for(let elem of elements){
          if(!visited[elem]){
            visited[elem] = true;
            q.unshift(elem);
          }
        }
      }
    }
    return false;
  }
}
```
## 字典树:Trie
是针对特定类型的搜索而优化的树数据结构。当你想要获取部分值并返回一组可能的完整值时，可以使用Trie。典型的例子是自动完成,搜索,分类
Trie，是一种搜索树，也称字典树或单词查找树，此外也称前缀树，因为某节点的后代存在共同的前缀
- key都为字符串，能做到高效查询和插入，时间复杂度为O(k)，k为字符串长度
- 缺点是如果大量字符串没有共同前缀时很耗内存。
- 它的核心思想就是减少没必要的字符比较，使查询高效率。
- 用空间换时间，再利用共同前缀来提高查询效率
```js
class PrefixTreeNode {
  constructor(value) {
    this.children = {};
    this.endWord = null;
    this.value = value;
  }
}
class PrefixTree extends PrefixTreeNode {
  constructor() {
    super(null);
  }
  // 基础操作方法
  //创建节点
  addWord(string) {
    const addWordHelper = (node, str) => {
        if (!node.children[str[0]]) {
            node.children[str[0]] = new PrefixTreeNode(str[0]);
            if (str.length === 1) {
                node.children[str[0]].endWord = 1;
            } else if (str.length > 1) {
                addWordHelper(node.children[str[0]], str.slice(1));
        }
    };
    addWordHelper(this, string);
}
//预测单词,给定一个字符串,返回树种以改字符串开头的所有单词
  predictWord(string) {
      let getRemainingTree = function(string, tree) {
        let node = tree;
        while (string) {
          node = node.children[string[0]];
          string = string.substr(1);
        }
        return node;
      };

      let allWords = [];
      
      let allWordsHelper = function(stringSoFar, tree) {
        for (let k in tree.children) {
          const child = tree.children[k]
          let newString = stringSoFar + child.value;
          if (child.endWord) {
            allWords.push(newString);
          }
          allWordsHelper(newString, child);
        }
      };

      let remainingTree = getRemainingTree(string, this);
      if (remainingTree) {
        allWordsHelper(string, remainingTree);
      }

      return allWords;
    }
  logAllWords() {
    console.log('------ 所有在字典树中的节点 -----------')
    console.log(this.predictWord(''));
  }
}
```
## 散列表(哈希表):Hash Tables
哈希表可以进行非常快速的查找
>散列（hashing）是电脑科学中一种对资料的处理方法，通过某种特定的函数/算法（称为散列函数/算法）将要检索的项与用来检索的索引（称为散列，或者散列值）关联起来，生成一种便于搜索的数据结构（称为散列表）。也译为散列。旧译哈希（误以为是人名而采用了音译）。  

>它也常用作一种资讯安全的实作方法，由一串资料中经过散列算法（Hashing algorithms）计算出来的资料指纹（data fingerprint），经常用来识别档案与资料是否有被窜改，以保证档案与资料确实是由原创者所提供。 —-Wikipedia  

Hash Tables优化了键值对的存储。在最佳情况下，哈希表的插入，检索和删除是恒定时间。哈希表用于存储大量快速访问的信息，如密码  
哈希表可以概念化为一个数组，其中包含一系列存储在对象内部子数组中的元组
1. 在散列中，通过使用散列函数将大键转换为小键。
2. 然后将这些值存储在称为哈希表的数据结构中。
3. 散列的想法是在数组中统一分配条目（键/值对）。为每个元素分配一个键（转换键）。
4. 通过使用该键，您可以在O(1)时间内访问该元素。
5. 使用密钥，算法（散列函数）计算一个索引，可以找到或插入条目的位置
- 通过使用散列函数将元素转换为整数。此元素可用作存储原始元素的索引，该元素属于哈希表。
- 该元素存储在哈希表中，可以使用散列键快速检索它。
### 哈希函数
- 哈希函数是可用于将任意大小的数据集映射到固定大小的数据集的任何函数，该数据集属于散列表
- 哈希函数返回的值称为哈希值，哈希码，哈希值或简单哈希值。
- 易于计算：它应该易于计算，并且不能成为算法本身。
- 统一分布：它应该在哈希表中提供统一分布，不应导致群集。
- 较少的冲突：当元素对映射到相同的哈希值时发生冲突。应该避免这些 
### 实现
合理的假设下，在哈希表中搜索元素所需的平均时间应是O（1）
```js
class Node {
	constructor( data ){
		this.data = data;
		this.next = null;
	}
}

class HashTableWithChaining {
	constructor( size = 10 ) {
		this.table = new Array( size );
	}
  //素数判断
	isPrime( num ) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
          if(num % i === 0) return false; 
      return num !== 1;
  }
  //哈希函数生成
  computeHash( string ) {
    let H = this.findPrime( this.table.length );
    let total = 0;
    for (let i = 0; i < string.length; ++i) {
          total += H * total + string.charCodeAt(i);
      }
    return total % this.table.length;
  }
  // 取模
  findPrime( num ) {
    while(true) {
      if( this.isPrime(num) ){ break; }
      num += 1
    }
    return num;
  }

  put( item ) {
    let key = this.computeHash( item );
    let node = new Node(item)
    if ( this.table[key] ) {
      node.next = this.table[key]
    }
    this.table[key] = node
  }

remove( item ) {
	let key = this.computeHash( item );
	if( this.table[key] ) {
		if( this.table[key].data === item ) {
			this.table[key] = this.table[key].next
		} else {
			let current = this.table[key].next;
			let prev = this.table[key];
			while( current ) {
				if( current.data === item ) {
					prev.next = current.next
				}
				prev = current
				current = current.next;
			}
		}
	}
}

contains(item) {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
            let current = this.table[i];
            while (current) {
                if (current.data === item) {
                    return true;
                }
                current = current.next;
            }
        }
    }
    return false;
}

size( item ) {
  let counter = 0
  for(let i=0; i<this.table.length; i++){
    if( this.table[i] ) {
      let current = this.table[i]
      while( current ) {
        counter++
        current = current.next
      }
    }
  }
  return counter
}

isEmpty() {
  return this.size() < 1
}
//遍历
traverse( fn ) {
  for(let i=0; i<this.table.length; i++){
    if( this.table[i] ) {
      let current = this.table[i];
      while( current ) {
        fn( current );
        current = current.next;
      }
    }
  }
}
}
```