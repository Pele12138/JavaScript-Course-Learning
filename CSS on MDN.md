# CSS on MDN

### CSS 语法

语法由一个 [选择器(selector)](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS_Selector)起头。 它 *选择(selects)* 了我们将要用来添加样式的 HTML 元素。 在这个例子中我们为一级标题（主标题`<h1>`）添加样式。

接着输入一对大括号`{ }`。 在大括号内部定义一个或多个形式为 **属性(property):值(value);** 的 **声明(declarations)**。每个声明都指定了我们所选择元素的一个属性，之后跟一个我们想赋给这个属性的值。





### 向HTML中添加CSS

```html
<link rel="stylesheet" href="style.css">
```

`<link>`语句块里面，我们用属性 `rel`，让浏览器知道有 CSS 文档存在（所以需要遵守 CSS 样式的规定），并利用属性 `href` 指定，寻找 CSS 文件的位置。 你可以做测试来验证CSS是否有效：在 `styles.css` 里面加上CSS样式并观察显示的结果。

用逗号将不同选择器隔开，即可一次使用多个选择器。譬如，若要将所有段落与列表变成绿色，只需：

```css
p, li {
    color: green;
}
```



#### 改变元素的默认行为

只要一个 HTML 文档标记正确，即使像我们的例子那么简单，浏览器都会尽全力将其渲染至可读状态。标题默认使用大号粗体；列表旁总有项目符号。这是因为浏览器自带一个包含默认样式的样式表，默认对任何页面有效。没有了它们，所有文本会夹杂在一起变得一团糟，我们只得从头开始规定，好糟糕。话说回来，所有现代浏览器的默认样式都没什么差距。

不过你可能对浏览器的默认样式不太满意。没关系，只需选定那个元素，加一条 CSS 规则即可。就拿我们的无序列表 `<ul>`举个例子吧，它自带项目符号，不过要是你跟它有仇，你就可以这样移除它们：

```css
li {
  list-style-type: none;
}
```



#### 使用类名

```html
<ul>
  <li>项目一</li>
  <li class="special">项目二</li>
  <li>项目 <em>三</em></li>
</ul>
```

在 CSS 中，要选中这个 `special` 类，只需在选择器的开头加个西文句点（.）。在你的 CSS 文档里加上如下代码：

```css
.special {
  color: orange;
  font-weight: bold;
}
```

有时你会发现选择器中，HTML 元素选择器跟类一起出现：

```css
li.special {
  color: orange;
  font-weight: bold;
}
```

这个意思是说，“选中每个 `special` 类的 `li` 元素”。 你真要这样，好了，它对 `<span>` 还有其它元素不起作用了。你可以把这个元素再添上去就是了：

```css
li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```



### 根据元素在文档中的位置确定样式

##### 包含选择符

在我们的文档中有两个 `<em>`元素 ——一个在段落内，另一个在列表项内。仅选择嵌套在`<li>` 元素内的`<em>`我们可以使用一个称为**包含选择符**的选择器，它只是单纯地在两个选择器之间加上一个空格。

将以下规则添加到样式表。

```css
li em {
  color: rebeccapurple;
}
```



##### 相邻选择符

另一些可能想尝试的事情是在 HTML 文档中设置直接出现在标题后面并且与标题具有相同层级的段落样式，为此需在两个选择器之间添加一个 `+` 号 (成为 **相邻选择符**) 

也将这个规则添加到样式表中：

```htm
h1 + p {
  font-size: 200%;
}
```



#### 根据状态确定样式

一个直观的例子就是当我们修改链接的样式时。 当我们修改一个链接的样式时我们需要定位（针对） `<a>` （锚）标签。取决于是否是未访问的、访问过的、被鼠标悬停的、被键盘定位的，亦或是正在被点击当中的状态，这个标签有着不同的状态。你可以使用CSS去定位或者说针对这些不同的状态进行修饰——下面的CSS代码使得没有被访问的链接颜色变为粉色、访问过的链接变为绿色。

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Copy to Clipboard

你可以改变链接被鼠标悬停的时候的样式，例如移除下划线，下面的代码就实现了这个功能。

```css
a:hover {
  text-decoration: none;
}
```



#### 同时使用选择器和选择符

你可以同时使用选择器和选择符。来看一些例子：

```css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```





### 内部样式表

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```



### 内联样式

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">Hello World!</h1>
    <p style="color:red;">This is my first CSS example</p>
  </body>
</html>
```

**除非你有充足的理由，否则不要这样做！**它难以维护（在需要更新时，你必须在修改同一个文档的多处地方），并且这种写法将文档结构和文档表现混合起来了，这使得代码变得难以阅读和理解。将不同类型的代码分开存放在不同的文档中，会让我们的工作更加清晰。

在某些地方，内联样式更常见，甚至更可取。 如果您的工作环境确实很严格（也许网站管理系统(CMS)仅允许您编辑HTML正文），则可能不得不使用它们。 您也会发现它们很长时间被应用在HTML电子邮件中，以便与尽可能多的电子邮件客户端兼容。



### 选择器

讲到CSS就不得不说到选择器, 并且在之前的辅导教程中我们已经列举了一些不同的选择器。为了样式化某些元素，我们会通过选择器来选中HTML文档中的这些元素。如果你的样式没有生效，那很可能是你的选择器没有像你想象的那样选中你想要的元素。

每个CSS规则都以一个选择器或一组选择器为开始，去告诉浏览器这些规则应该应用到哪些元素上。以下都是有效的选择器或组合选择器的示例。

```css
h1
a:link
.manythings
#onething
*
.box p
.box p:first-child
h1, h2, .intro
```



#### 专一性 

通常情况下，两个选择器可以选择相同的HTML元素。考虑下面的样式表，其中我有一个规则，其中有一个将段落设置为蓝色的p选择器，还有一个将选定元素设置为红色的类。

```css
.special {
  color: red;
}

p {
  color: blue;
}
```

比方说，在我们的HTML文档中，我们有一个带有特殊类的段落。这两条规则都适用，那么谁赢了？你认为我们的段落会变成什么颜色？

```css
<p class="special">What color am I?</p>
```

CSS语言有规则来控制在发生碰撞时哪条规则将获胜--这些规则称为级联规则和专用规则。在下面的代码块中，我们为p选择器定义了两个规则，但是段落最后是蓝色的。这是因为将其设置为蓝色的声明将出现在样式表的后面，而*稍后的样式将覆盖以前的样式*。这就是起作用的**级联**。

```css
p {
  color: red;
}

p {
  color: blue;
}
```

但是，在我们同时使用了类选择器和元素选择器的前一个例子中，**类**将获胜，使得段落变红--即使它出现在样式表的前面。一个类被描述为比元素选择器更具体，或者具有更多的特异性，所以它获胜了。

+ 同级：稍后的样式覆盖前面的样式

+ 类选择器  > 元素选择器





#### 属性和值

属性：`color`<br>值：`blue`<br>属性+值🢣CSS声明：`color: blue`<br>声明+选择器🢣CSS规则集：

```css
h1 {
  color: blue;
  background-color: yellow;
}
```



#### 函数

虽然大多数值是相对简单的关键字或数值，但也有一些可能的值以函数的形式出现。一个例子是calc()函数。这个函数允许您在CSS中进行简单的计算，例如：

```html
<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>
```

**clac**

```css
.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}
```

![image-20220225152643179](https://pele-images.oss-cn-hangzhou.aliyuncs.com/images/202202251526308.png)

**transform**

另一个例子是`<transform>`, 例如 `rotate()`.

```html
<div class="box"></div>
```

```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn)
}
```

<img src="https://pele-images.oss-cn-hangzhou.aliyuncs.com/images/202202251533473.png" alt="image-20220225153354364" style="zoom:33%;" />



#### @规则

到目前为止，我们还没有遇到 `@rules` (pronounced "at-rules"). 这是一些特殊的规则，为 CSS提供了一些关于如何表现的指导。 有些`@rules` 规则很简单，有规则名和值。例如，要将额外的样式表导入主CSS样式表，可以使用`@import`:

```
@import 'styles2.css';
```

Copy to Clipboard

您将遇到的最常见的 `@rules` 之一是@media，它允许您使用 [媒体查询 ](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)来应用CSS，仅当某些条件成立(例如，当屏幕分辨率高于某一数量，或屏幕宽度大于某一宽度时)。

在下面的 CSS中，我们将给 `<body>` 元素一个粉红色的背景色。但是，我们随后使用@media创建样式表的一个部分，该部分仅适用于视口大于30em的浏览器。如果浏览器的宽度大于30em，则背景色将为蓝色。

```css
body {
  background-color: pink;
}

@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}
```

在这些教程中，你将遇到一些其他的规则 `@rules` 

**查看是否可以将媒体查询添加到CSS中，该查询将根据视口宽度更改样式。更改浏览器窗口的宽度以查看结果。**



#### 速记属性

一些属性，如 [`font`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font), [`background`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background), [`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding), [`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border), and [`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin) 等属性称为速记属性--这是因为它们允许您在一行中设置多个属性值，从而节省时间并使代码更整洁。

例如，这一行代码：

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

与这四行代码是等价的：

```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

## 这一行：

```css
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```

与这五行代码是等价的：

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

#### 空格

在CSS中，属性和它们的值之间的空格需要小心。

例如，以下声明是有效的CSS：

```css
margin: 0 auto;
padding-left: 10px;
```

以下内容无效：

```css
margin: 0auto;
padding- left: 10px;
```

“0auto”不被识别为边距属性的有效值(“0”和“AUTO”是两个独立的值)，而浏览器会将“padding- ”识别为有效属性。因此，您应该始终确保通过至少一个空格将不同的值分隔开来，但将属性名称和属性值作为单个未中断的字符串放在一起。



### CSS工作原理

