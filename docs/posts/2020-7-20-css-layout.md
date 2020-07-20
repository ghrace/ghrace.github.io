## css 布局

1. 两端对齐

如果和前面行的个数不相同（Flex项目）,如果和前面行的个数不相同（Flex项目）
```css
/* 伪元素的 flex-basis 建议设置的和卡片的 flex-basis（或宽度）等同 */
.flex__container::after {
    content: "";
    display: flex;
    flex: 0 1 32vw;
}
```
> 占位符元素数量 = 每行最大的列数 - 2
```css
/* 1 */
.grid__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1vh;
}
/* 2 */
.flex__container {
    display: flex;
    flex-wrap: wrap;
    gap: 2vh;

    width: 100%;
}

.flex__item {
    flex: 0 1 calc((100vw - 8vh) / 4);
}
```

2. 选择最佳的值

clam() 函数接受三个参数，即 clam(MIN, VAL, MAX)，其中 MIN 表示最小值，VAL 表示首选值，MAX 表示最大值。它们之间：

3. 图像适应

```html
<!-- HTML -->
<ul class="brands">
    <li class="brands__item">
        <a href="#">
            <img src="img/logo.png" alt="">
        </a>
    </li>
    <li> <!-- ... --> </li>
</ul>
```
```css

.brands {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 1rem;
}

.brands__item {
    background: #eee;
}

.brands__item a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.brands__item img {
    width: 130px;
    height: 75px;
    object-fit: contain;
}
/* Logo图像带有背景颜色 */
.brands__item img {
    width: 130px;
    height: 75px;
    object-fit: contain;
    mix-blend-mode: multiply;
}
```
