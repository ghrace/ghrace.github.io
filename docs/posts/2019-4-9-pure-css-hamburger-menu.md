## 纯css实现面包式菜单

在YouTube看到一个视频,介绍怎么用纯css实现面包式菜单,作者是`Traversy Media`,看了觉得很厉害,css也能做这么多事,[demo](/hamburger)

>we will create a landing page with a pure CSS responsive hamburger menu (No JavaScript) with a bit of animation using CSS transitions  

1. HTML部分
```html
 <div class="menu-wrap">
    <input type="checkbox" class="toggler">
    <div class="hamburger"><div></div></div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <header class="showcase">
    <div class="container showcase-inner">
      <h1>Welcome</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae explicabo cum facere ratione veritatis.</p>
      <a href="#" class="btn">Read More</a>
    </div>
  </header>
  ```
2. 接下来就全是css
首先是用了`:root`声明了一些变量,之前没了解过,查了下mdn资料
```css
:root {
    --primary-color: rgba(13, 110, 139, 0.75);
    --overlay-color: rgba(24, 39, 51 , 0.85);
    --menu-speed: 0.75s;
}
```
核心menu css
```css
.menu-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
  
  .menu-wrap .toggler {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
  }
  /* var使用root声明的变量 */
  .menu-wrap .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 1rem;
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Hamburger Line */
  .menu-wrap .hamburger > div {
    position: relative;
    flex: none;
    width: 100%;
    height: 2px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
  }
  
  /* Hamburger Lines - Top & Bottom */
  .menu-wrap .hamburger > div::before,
  .menu-wrap .hamburger > div::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -10px;
    width: 100%;
    height: 2px;
    background: inherit;
  }
  
  /* Moves Line Down */
  .menu-wrap .hamburger > div::after {
    top: 10px;
  }
  
  /* Toggler Animation */
  .menu-wrap .toggler:checked + .hamburger > div {
    transform: rotate(135deg);
  }
  
  /* Turns Lines Into X */
  .menu-wrap .toggler:checked + .hamburger > div:before,
  .menu-wrap .toggler:checked + .hamburger > div:after {
    top: 0;
    transform: rotate(90deg);
  }
  
  /* Rotate On Hover When Checked */
  .menu-wrap .toggler:checked:hover + .hamburger > div {
    transform: rotate(225deg);
  }
  
  /* Show Menu */
  .menu-wrap .toggler:checked ~ .menu {
    visibility: visible;
  }
  
  .menu-wrap .toggler:checked ~ .menu > div {
    transform: scale(1);
    transition-duration: var(--menu-speed);
  }
  
  .menu-wrap .toggler:checked ~ .menu > div > div {
    opacity: 1;
    transition:  opacity 0.4s ease 0.4s;
  }
  
  .menu-wrap .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .menu-wrap .menu > div {
    background: var(--overlay-color);
    border-radius: 50%;
    width: 200vw;
    height: 200vw;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    transition: all 0.4s ease;
  }
  
  .menu-wrap .menu > div > div {
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  .menu-wrap .menu > div > div > ul > li {
    list-style: none;
    color: #fff;
    font-size: 1.5rem;
    padding: 1rem;
  }
  
  .menu-wrap .menu > div > div > ul > li > a {
    color: inherit;
    text-decoration: none;
    transition: color 0.4s ease;
  }
  ```