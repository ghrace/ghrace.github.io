## 复制、剪切、粘贴事件
在segmentfault看了一个文章,讲js复制粘贴,或许将来会用到,学习一下  [原文](https://segmentfault.com/a/1190000015942599)

1. copy 复制
2. cut 剪切
3. paste 粘贴

还有个before事件对应. beforecopy、beforecut、beforepaste

```js
document.body.oncopy = e => {
        console.log(e)
    }
```
## clipboardData对象:访问修改剪切板数据

兼容 ie 是window对象,其他 event对象

### 方法
getData(): 'text'参数,表示获取文本

复制和剪切中的数据，通过`window.getSelection(0).toString()`

```js
 document.body.onpaste = e => {
     let clipboardData = (e.clipboardData || window.clipboardData); //ie
     console.log(clipboardData.getData('text'));
 }
 ```
```js
 document.body.oncopy = e => {
     console.log(window.getSelection(0).toString());
 }
 ```

 `setData('text',data)`:修改数据,text是格式,data是修改的内容
```js
    document.body.oncopy = event => {
        event.preventDefault(); // 取消默认的复制事件 
        let oldText = window.getSelection(0).toString(); // 被复制的文字 等下插入
        let newText=''
        if (oldText.length > 10) {
            newText = oldText + '\n'
                + '作者：\n'
        } else {
            newText = oldText; 
        }
        if (event.clipboardData) {
            return event.clipboardData.setData('text', textFont); // 将信息写入粘贴板
        } else {
            // IE
            return window.clipboardData.setData("text", textFont);
        }
    }
```

### 禁止复制粘贴
 ```js
     // 禁止右键菜单
    document.body.oncontextmenu = e => {
        return false;
    };
    // 禁止文字选择。
    document.body.onselectstart = e => {
        return false;
    };
    // 禁止复制
    document.body.oncopy = e => {
        return false; 
    }
    // 禁止剪切
    document.body.oncut = e => {
        return false;
    };
    // 禁止粘贴
    document.body.onpaste = e => {
        return false;
    };
```
例子是整个body都禁用,可在指定元素禁用

css

```css
  /* css 禁止文本选择 不会触发js */
    body {
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
``` 
