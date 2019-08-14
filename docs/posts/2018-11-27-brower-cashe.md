## 浏览器缓存机制

缓存可以减少网络 IO 消耗，提高访问速度。浏览器缓存是一种操作简单、效果显著的前端性能优化手段
>通过网络获取内容既速度缓慢又开销巨大。较大的响应需要在客户端与服务器之间进行多次往返通信，这会延迟浏览器获得和处理内容的时间，还会增加访问者的流量费用。因此，缓存并重复利用之前获取的资源的能力成为性能优化的一个关键方面。

浏览器缓存有4个方面,优先级如下:

1. Memory Cache
2. Service Worker Cache
3. HTTP Cache
4. Push Cache (http2特性)

## HTTP缓存机制
HTTP缓存分为强缓存和协商缓存。优先级较高的是强缓存，在命中强缓存失败的情况下，才会走协商缓存。

### 强缓存
强缓存是利用 http 头中的 `Expires` 和 `Cache-Control` 两个字段来控制的,强缓存中，当请求再次发出时，浏览器会根据其中的 `expires` 和 `cache-control` 判断目标资源是否“命中”强缓存，若命中则直接从缓存中获取资源，不会再与服务端发生通信  
返回的HTTP状态码为 200  
#### 强缓存的实现
在 Response Headers 中将过期时间写入 expires 字段
```
expires: Wed, 11 Sep 2019 16:12:18 GMT
```
`expires` 是一个时间戳，接下来如果我们试图再次向服务器请求资源，浏览器就会先对比本地时间和 `expires` 的时间戳，如果本地时间小于 `expires` 设定的过期时间，那么就直接去缓存中取这个资源。服务端和客户端的时间设置可能不同,将失去预期效果  
`Cache-Control`是http1.1新增用来替代` expires`
```
cache-control: max-age=3600, s-maxage=31536000
```
通过 `max-age`时间长度控制有效期, `Cache-Control` 与 `expires` 同时出现时，我们以 `Cache-Control` 为准  

`s-maxage` 优先级高于 `max-age`,s-maxage仅在代理服务器中生效，客户端中我们只考虑`max-age`,`s-maxage` 就是用于表示 cache 服务器上（比如 cache CDN）的缓存的有效时间的，并只对 public 缓存有效  
##### public 与 private
为资源设置了 public，那么它既可以被浏览器缓存，也可以被代理服务器缓存；如果我们设置了 private，则该资源只能被浏览器缓存。private 为默认值

##### no-store与no-cache
no-cache 绕开了浏览器：我们为资源设置了 no-cache 后，每一次发起请求都不会再去询问浏览器的缓存情况，而是直接向服务端去确认该资源是否过期（协商缓存）。  
no-store 就是不使用任何缓存策略。在 no-cache 的基础上，它连服务端的缓存确认也绕开了，只允许你直接向服务端发送请求、并下载完整的响应。

### 协商缓存
依赖于服务端与浏览器之间的通信,浏览器需要向服务器去询问缓存的相关信息，进而判断是重新发起请求、下载完整的响应，还是从本地获取缓存的资源  
如果服务端提示缓存资源未改动（Not Modified），资源会被重定向到浏览器缓存，这种情况下网络请求对应的状态码是 304

#### Last-Modified  Etag
Last-Modified 是一个时间戳，如果我们启用了协商缓存，它会在首次请求时随着 Response Headers 返回：
```
Last-Modified: Fri, 27 Oct 2017 06:35:57 GMT
```
随后的每次请求时，会带上一个叫 If-Modified-Since 的时间戳字段，它的值正是上一次 response 返回给它的 last-modified 值
```
If-Modified-Since: Fri, 27 Oct 2017 06:35:57 GMT
```
服务器接收到这个时间戳后，会比对该时间戳和资源在服务器上的最后修改时间是否一致，从而判断资源是否发生了变化。如果发生了变化，就会返回一个完整的响应内容，并在 Response Headers 中添加新的 Last-Modified 值；否则，返回如上图的 304 响应，Response Headers 不会再添加 Last-Modified 字段。  
缺陷是服务器不能正确感知文件的变化,Etag就作为补充出现了  
Etag 是由服务器为每个资源生成的唯一的标识字符串，这个标识字符串是基于文件内容编码的，只要文件内容不同，它们对应的 Etag 就是不同的，反之亦然。因此 Etag 能够精准地感知文件的变化
```
ETag: W/"2a3b-1602480f459"
```
那么下一次请求时，请求头里就会带上一个值相同的、名为 if-None-Match 的字符串供服务端比对了：
```
If-None-Match: W/"2a3b-1602480f459"
```
Etag 的生成过程需要服务器额外付出开销，会影响服务端的性能，这是它的弊端,Etag优先级更高。当 Etag 和 Last-Modified 同时存在时，以 Etag 为准。

## http缓存决策
![cache](../img/cache.jpg)
我们的资源内容不可复用时，直接为 Cache-Control 设置 no-store，拒绝一切形式的缓存；否则考虑是否每次都需要向服务器进行缓存有效确认，如果需要，那么设 Cache-Control 的值为 no-cache；否则考虑该资源是否可以被代理服务器缓存，根据其结果决定是设置为 private 还是 public；然后考虑该资源的过期时间，设置对应的 max-age 和 s-maxage 值；最后，配置协商缓存需要用到的 Etag、Last-Modified 等参数...

## MemoryCache
指存在内存中的缓存,响应速度最快的一种缓存,当进程结束后，内存里的数据也将不复存在  
Base64 格式的图片，几乎永远可以被塞进 memory cache，此外，体积不大的 JS、CSS 文件，也有较大地被写入内存的几率,较大的 JS、CSS 文件往往被直接甩进磁盘。
## Service Worker Cache
Service Worker 是一种独立于主线程之外的 Javascript 线程,脱离于浏览器窗体,可实现离线缓存、消息推送和网络代理等功能  
生命周期包括 install、active、working 三个阶段。一旦 Service Worker 被 install，它将始终存在，只会在 active 与 working 之间切换，除非我们主动终止它, Server Worker 对协议是有要求的，必须以 https 协议为前提
```js
window.navigator.serviceWorker.register('/test.js').then(
   function () {
      console.log('注册成功')
    }).catch(err => {
      console.error("注册失败")
    })

// Service Worker会监听 install事件，我们在其对应的回调里可以实现初始化的逻辑  
self.addEventListener('install', event => {
  event.waitUntil(
    // 考虑到缓存也需要更新，open内传入的参数为缓存的版本号
    caches.open('test-v1').then(cache => {
      return cache.addAll([
        // 此处传入指定的需缓存的文件名
        '/test.html',
        '/test.css',
        '/test.js'
      ])
    })
  )
})

// Service Worker会监听所有的网络请求，网络请求的产生触发的是fetch事件，我们可以在其对应的监听函数中实现对请求的拦截，进而判断是否有对应到该请求的缓存，实现从Service Worker中取到缓存的目的
self.addEventListener('fetch', event => {
  event.respondWith(
    // 尝试匹配该请求对应的缓存值
    caches.match(event.request).then(res => {
      // 如果匹配到了，调用Server Worker缓存
      if (res) {
        return res;
      }
      // 如果没匹配到，向服务端发起这个资源请求
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200) {
          return response;
        }
        // 请求成功的话，将请求缓存起来。
        caches.open('test-v1').then(function(cache) {
          cache.put(event.request, response);
        });
        return response.clone();
      });
    })
  );
}
```
## Push Cache
HTTP2 在 server push 阶段存在的缓存
1. Push Cache 是缓存的最后一道防线。浏览器只有在 Memory Cache、HTTP Cache 和 Service Worker Cache 均未命中的情况下才会去询问 Push Cache。
2. Push Cache 是一种存在于会话阶段的缓存，当 session 终止时，缓存也随之释放。
3. 不同的页面只要共享了同一个 HTTP2 连接，那么它们就可以共享同一个 Push Cache。...