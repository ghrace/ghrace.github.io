## 爬虫

作为前端,看到很多爬虫,就被深深吸引了，因为感觉很cool！敲个回车就拼命的显示一行行数据,不一会就爬了几千张图片
### 什么是爬虫 

网络爬虫,又被称为网页蜘蛛，网络机器人,就是自动的根据一定规则去爬虫网上的某些信息,能请求网络的语言都可以写爬虫,如node,java,python,这儿选择Python写爬虫,因为Python火啊

### 入门

首先熟悉Python语法,了解爬虫需要的相关库,`requests`是最基本的,简单例子如下

```python
# coding=utf-8
import requests
from lxml import etree
url='https://www.qiushibaike.com' #爬取的网站 糗事百科
for i in range(1,10): #循环10页数据
    req=requests.get(url+'/8hr/page/%d/'%(i)) #请求网站
    root=etree.HTML(req.text) #解析
    # 分析网页,作为前端经常用的f12审查元素 看需要的内容是什么格式,在哪个标签 可以用xpath匹配
    p=root.xpath('//div[contains(@class,mb15)]/a[1]/div/span[1]') 
    for a in p:
        text=a.text
        print(text)
        #写入结果到记事本中
        with open("qb.txt","a",encoding='utf-8') as f:
            f.write(text.strip()+"\n\n")
```

### 保存图片,存数据库

网上很多爬虫都是爬各种图片,妹子图啊,之前看到有个项目爬取抖音小姐姐,再应用图片分析,调用腾讯颜值判断接口分析图片,感觉很厉害,有没有  
简单爬个豆瓣250海报图片:

```python
# coding=utf-8
import os
import requests
import time
from pymongo import MongoClient
from bs4 import BeautifulSoup
# 连接本地mongodb
conn=MongoClient('127.0.0.1',27017)
db=conn.movie #movie库
my_set=db.movie_set  #movie_set 集合
#设定个请求头,模拟成浏览器方法,防止被封ip,可以放多个头部,随机调取
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36'}
base_url = 'https://movie.douban.com/top250?start='  # 设定一个网址不变的部分，然后我们只要每次在这个后面加数字就可以了
os.mkdir("img")#创建图片文件夹
os.chdir("img")
for num in range(0,10):
    page=str(num*25)
    time.sleep(1) #爬取1页数据休息1s
    # request = requests.Session()
    # request.proxies = .... 反爬虫,代理   
    r=requests.get(base_url+page+'&filter=',headers=headers)
    content = r.text
    soup = BeautifulSoup(r.text, 'lxml')
    #class是python关键字,class_代替
    items=soup.find_all('div',class_='item')
    for item in items:
        title=item.find('span',class_='title').get_text() #get_text获取文本
        print(title)
        quote=item.find('p',class_='quote')
        if quote:
            quote=quote.get_text()
            #保存到数据库
            my_set.insert({"title":title,"quote":quote})
    imgs=soup.find_all('img')
    for img in imgs:
        #获取alt描述信息,作为图片名字
        title=img.get('alt')
        #获取图片src 
        src=img.get('src')
        print(src)
        #请求图片
        photo=requests.get(src)
        #保存图片 'wb'写入
        with open(title+".jpg", "wb") as f:
            f.write(photo.content)
```
