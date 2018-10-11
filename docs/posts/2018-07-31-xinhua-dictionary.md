---
title: 新华字典库
datetime: 2018-07-31
---
### 在github 上发现了一个有意思的库  新华字典库,包含了字,词典,成语,歇后语

地址:[新华词典](https://github.com/pwxcoo/chinese-xinhua)  

然后用Python简单测试了一下
代码如下
```python
    import requests
    # pretty
    from prettyprinter import cpprint
    # 新华字典库
    url='https://www.pwxcoo.com/dictionary'
    #歇后语 riddle 语面 可模糊搜索
    params={'type':'xiehouyu','riddle':'唐僧'}
    # 成语
    # params={'type':'idiom','riddle':'兴高采烈'}
    #  拼音缩写
    # params={'type':'idiom','riddle':'xgcl'}
    # 汉字
    # params={'type':'word','riddle':'王'} 
    r=requests.get(url=url,params=params)
    data=r.json()
    cpprint(data)
```
------
效果图  
搜索歇后语 唐僧  
效果不错

![新华词典](../img/xinhua.png '唐僧')

