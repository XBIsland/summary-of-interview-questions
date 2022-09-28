# CSS

## css 有哪些常用选择器？优先级？
常用的选择器：
  - 通配符选择器
  - id 选择器
  - 类名选择器
  - 标签选择器
  - 后代选择器
  - 子选择器
  - 伪类选择器 `:hover`
  - 伪元素选择器 `::after`
  - 属性选择器 `[attribute]`

优先级：`!important` > `内联样式` > `ID选择器` > `类选择器` > `标签选择器` > `通用选择器`

## css 如何定义变量？
通过 `--*` 来定义变量，通过 `var(--*)` 函数来使用变量。

```css
:root {
  --main-color: brown;
}
element {
  color: var(--main-color);
}
```
在 `js` 中使用：
```javascript
// 设置变量
document.getElementById("box").style.setPropertyValue('--color', 'pink')
// 读取变量
doucment.getElementById('box').style.getPropertyValue('--color').trim()    //pink
// 删除变量
document.getElementById('box').style.removeProperty('--color')
```

## css 中 em、rem、vw、vmin、vmax 各代表什么意思？
- em：相对长度单位，当前元素的 `font-size` 计算值。
- rem：表示根元素的 `font-size`大小。
- vw：`1vw` 表示视口宽度的 1%。
- vh：`1vw` 表示视口高度的 1%。
- vmin：`vw` 和 `vh` 之间的最小值
- vmax：`vw` 和 `vh` 之间的最大值