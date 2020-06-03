<!-- TOC -->

- [html5](#html5)
  - [<font color="megenta"> h5新特性</font>](#font-colormegenta-h5新特性font)
    - [增加的语义化标签。细化div](#增加的语义化标签细化div)
    - [增加的音频视频标签](#增加的音频视频标签)
    - [废弃标签](#废弃标签)
    - [表单](#表单)
- [css3](#css3)
  - [选择器增加](#选择器增加)
  - [伪类](#伪类)
  - [css3伪元素](#css3伪元素)
  - [盒模型](#盒模型)
  - [边框/背景/渐变](#边框背景渐变)
      - [<font color='RoyalBlue'>边框</font>](#font-colorroyalblue边框font)
      - [<font color='HotPink'>背景</font>](#font-colorhotpink背景font)
      - [<font color='DarkViolet'>渐变</font>](#font-colordarkviolet渐变font)
  - [文字特效](#文字特效)
  - [2D/3D转换](#2d3d转换)
      - [<font color="orange">2D</font>](#font-colororange2dfont)
      - [<font color="Magenta">3D</font>](#font-colormagenta3dfont)
  - [过渡/动画](#过渡动画)
      - [<font color="LightGreen">过渡</font>](#font-colorlightgreen过渡font)
      - [<font color="MediumPurple">动画</font>](#font-colormediumpurple动画font)
  - [多列布局](#多列布局)
  - [用户界面](#用户界面)
  - [其他：](#其他)
- [其他](#其他)
    - [最小值和最大值](#最小值和最大值)
    - [滚动条样式](#滚动条样式)
    - [响应式布局(Responsive web design(响应式网页制作)RWD)：](#响应式布局responsive-web-design响应式网页制作rwd)
    - [媒体查询](#媒体查询)
    - [存储](#存储)
    - [cookies，sessionStorage 和 localStorage 的区别？](#cookiessessionstorage-和-localstorage-的区别)
    - [多线程](#多线程)
    - [webSql](#websql)
    - [事件推送](#事件推送)
    - [拖拽事件](#拖拽事件)
    - [canvas](#canvas)
    - [移动端学习](#移动端学习)
    - [<font style="color:salmon">三栏布局</font>](#font-stylecolorsalmon三栏布局font)
    - [<font style="color: hotpink">flex布局</font>](#font-stylecolor-hotpinkflex布局font)
    - [rgba和opacity的区别](#rgba和opacity的区别)
    - [++*页面布局总结*++](#页面布局总结)

<!-- /TOC -->
## html5
[您的浏览器支持html5的程度如何](html5test.com)  
[浏览器可以使用该功能么](caniuse.com)      

### <font color="megenta"> h5新特性</font>
- 自封闭标签可以不写 /
- style，link，script的三种type可以省略
- 标签可以大写，不建议用
- 标签的属性值可以不加引号。不建议用

#### 增加的语义化标签。细化div
- header
- nav
- section
- aside
- article
- footer
- figure figcaption
- time
- mark
- details summary:总结

#### 增加的音频视频标签
video和audio是行内元素，但是可以设置高宽，类似img
- embed
- video
- audio  

```
<embed src=""></embed>
<video src="" controls autoplay loop></video>
<video controls width="300px">
    <source src="">
</video>
<audio src=""  controls autoplay loop></audio>
<audio controls>
    <source src="">
</audio>
```

#### 废弃标签
html从4版本以后进行结构和样式分离，一些描述样式的标签被废弃了  
- font 
- del，u (text-decoration)
- b，strong (font-weight)
- i，em (font-style)
- br,  hr 

#### 表单
- form标签不一定包裹元素。文本框的form属性和form的id一致
- label标签可以不用for直接包裹input
- 新增的表单标签：感应标签，需要list，id绑定
    - datalist:+option。
- 新增的标签属性：
    - placeholder:
    - autofocus:自动获取焦点
    - required:必填项
- 新增的input标签类型： 
    - tel email number range date week search url color
- tabindex:1  按tab键获取焦点的顺序，可以不只是input，eg:div
- 绑定的标签：
```
<input type="radio" name="M" id="M">
<label for="M">男</lable?

<form action="" id="add"/>
<input type="text" name="" form="add"/>

<input type="text" name="" list="ganying">
<datalist id="ganying">
    <option value="zuqiu">足球</option>
    <option value="lanqiu">篮球</option>
    <option value="wangqiu">网球</option>
</datalist>

< input type="tel,eamil,url,search,number,range,date,week,color" min="" max="" value="">
```

## css3
### 选择器增加
- css2.1:标签，类，id，通配符，后代，交集，并集
- 属性选择器：
    - 开头  img[src ^= ""]
    - 结尾  img[src $= ""]
    - 任意  a[href *= ""]
    - 自定义属性，必须以data-开头,eg:data-haha
    - 分组:结合自定义标签(类似类选择器)     div[data-haha ~= "box"]
    - 短横：（类似类选择器把空格改成短横，且以box开头）   div[data-haha |= "box"]
    - 有属性：img[alt] 或者 [alt]
    - 属性交集：img[src=""][alt]
- 儿子序选择器：
    - 第一个孩子：p:first-child
    - 最后一个孩子：p:last-child
    - 第四个孩子：p:nth-child(4)
    - 第一个孩子和每隔2个孩子：p:nth-child(2n+1)
    - 倒数第一个孩子：p:nth-last-child(3)
    - 倒数偶数孩子：p:nth-last-child(2n)
- 儿子类型序选择器：
    - 第一个这种类型的儿子：p:first-of-type
    - 最后一个这种类型的孩子：p:last-of-type
    - 第3个这种类型的孩子：p:nth-of-type(3)
    - 偶数这种类型的孩子：p:nth-of-type(2n)
    - 倒数第三个这种孩子：p:nth-last-of-type(2)
    - 倒数奇数这种类型：p:nth-last-of-type(2n+1)
- 子代选择器：
    - .box > p
- 兄弟选择器（同一个父亲，后面第一个亲兄弟）：
    - h3 + p
- 后面所有亲兄弟选择器：
    - .box ~ p

### 伪类
所有元素伪类，表单元素伪类，节点伪类
- xxx:hover
- input[type="radio"]:checked + span
- input:enabled    
- input:disabled
- input:focus
- li:only-child：li是ul的唯一节点
- :empty：该元素是空节点（空格，缩进，换行都不是空）

### css3伪元素 
- **::before** content=""  行内元素，设置宽高先转块
- **::after** 同上  
- ::first-letter
- ::first-line
- ::selection:鼠标圈写变背景色

### 盒模型
- 标准盒模型：
    - 盒子宽 = width(内容宽) + padding(内边距) + border(边框)
    - 盒子高 = height(内容高) + padding(内边距) + border(边框)
    ```css
    {
        box-sizing: content-box;
    }
    ```
- 内减盒/怪异盒模型：
    - width(盒子宽) = 内容宽 + padding(内边距) + border(边框)
    - height(盒子高) = 内容高 + padding(内边距) + border(边框)
    ```css
    {
        box-sizing: border-box;
    }
    ```
- 弹性盒：
    - 弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成
    ```css
    {
        display: -webkit-box; /* 父盒子是弹性盒容器，子盒子不用浮动可以并排显示 */
        webkit-box-flex: 1; /* 数字代表占的份数，子盒子不需要写宽度了*/
    }
    ```

### 边框/背景/渐变
##### <font color='RoyalBlue'>边框</font>
- ==border-radius==: 1-4 length|% / 1-4 length|%;  
如果你在 border-radius 属性中只指定一个值，那么将生成 4 个 圆角。但是，如果你要在四个角上一一指定，可以使用以下规则：  
    - 四个值: 第一个值为左上角，第二个值为右上角，第三个值为右下角，第四个值为左下角。
    - 三个值: 第一个值为左上角, 第二个值为右上角和左下角，第三个值为右下角
    - 两个值: 第一个值为左上角与右下角，第二个值为右上角与左下角
    - 一个值： 四个圆角值相同
```css
div {
    border:2px solid;
    border-radius:25px;
}
div {
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border-bottom-left-radius: 25px;
}
```
- ==box-shadow==: h-shadow v-shadow blur spread color inset;  
设置一个或多个下拉框的阴影
```css
div {
    box-shadow: 10px 10px 5px #888888;
}
```
- ==border-image==: source slice width outset repeat|initial|inherit;  
设置所有边框图像的速记属性
```css
div {
    border-image:url(border.png) 30 30 round;
    -webkit-border-image:url(border.png) 30 30 round; /* Safari 5 and older */
    -o-border-image:url(border.png) 30 30 round; /* Opera */
}
```
##### <font color='HotPink'>背景</font>  
- ==background-image==  
添加背景图片,不同的背景图像和图像用逗号隔开，所有的图片中显示在最顶端的为第一张
```css
#example1 { 
    background-image: url(img_flwr.gif), url(paper.gif); 
    background-position: right bottom, left top; 
    background-repeat: no-repeat, repeat; 
}
/* 等价于 */
#example1 {
    background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
}
/* 多个背景图像 */
body { 
    background-image:url(img_flwr.gif),url(img_tree.gif);
}
```
- ==background-size==: length|percentage|cover|contain;  
指定背景图像的大小,可以指定像素或百分比大小，你指定的大小是相对于父元素的宽度和高度的百分比的大小
```css
{
    background:url(img_flwr.gif);
    background-size:80px 60px;
    background-repeat:no-repeat;
}
div {
    background:url(img_flwr.gif);
    background-size:100% 100%;
    background-repeat:no-repeat;
}
```
- ==background-origin==: padding-box|border-box|content-box;  
指定了背景图像的位置区域，content-box, padding-box,和 border-box区域内可以放置背景图像，默认是padding-box
```css
div {
    background:url(img_flwr.gif);
    background-repeat:no-repeat;
    background-size:100% 100%;
    background-origin:content-box;
}
```
- ==background-clip==: border-box|padding-box|content-box;  
背景剪裁属性是从指定位置开始绘制
```css
#example1 { 
    border: 10px dotted black; 
    padding: 35px; 
    background: yellow; 
    background-clip: content-box; 
}
```
```css
{
    background-image:url1,url2,...,urlN;
    background-repeat : repeat1,repeat2,...,repeatN;
    backround-position : position1,position2,...,positionN;
    background-size : size1,size2,...,sizeN;
    background-attachment : attachment1,attachment2,...,attachmentN;
    background-clip : clip1,clip2,...,clipN;
    background-origin : origin1,origin2,...,originN;
    background-color : color;
}
/*等价于*/
{
    background ：[background-color] | [background-image] | [background-position][/background-size] | [background-repeat] | [background-attachment] | [background-clip] | [background-origin],...
}
```
- <font color='red'>注意</font>
    - 用逗号隔开每组 background 的缩写值；
    - 如果有 size 值，需要紧跟 position 并且用 "/" 隔开；
    - 如果有多个背景图片，而其他属性只有一个（例如 background-repeat 只有一个），表明所有背景图片应用该属性值。
    - background-color 只能设置一个。

##### <font color='DarkViolet'>渐变</font>    
CSS3 渐变（gradients）可以让你在两个或多个指定的颜色之间显示平稳的过渡。  
以前，你必须使用图像来实现这些效果。但是，通过使用 CSS3 渐变（gradients），你可以减少下载的时间和宽带的使用。此外，渐变效果的元素在放大时看起来效果更好，因为渐变（gradient）是由浏览器生成的。  
CSS3 定义了两种类型的渐变（gradients）：  
- 线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向  
- 径向渐变（Radial Gradients）- 由它们的中心定义  
<br/>
1. 线性渐变
- background-image: ==linear-gradient==(direction/angle, color-stop1, color-stop2, ...);  
```css
/* 从上到下的线性渐变 */
#grad {
    background-image: linear-gradient(#e66465, #9198e5);
}
/* 从左到右的线性渐变 */
#grad {
  height: 200px;
  background-image: linear-gradient(to right, red , yellow);
}
/* 从左上角到右下角的线性渐变 */
#grad {
  height: 200px;
  background-image: linear-gradient(to bottom right, red, yellow);
}
/* 带有指定的角度的线性渐变 */
#grad {
  background-image: linear-gradient(-90deg, red, yellow);
}
/* 带有多个颜色结点的从上到下的线性渐变 */
#grad {
  background-image: linear-gradient(red, yellow, green);
}
/* 创建一个带有彩虹颜色和文本的线性渐变 */
#grad {
  /* 标准的语法 */
  background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
}
```
- 使用透明度
```css
/* 从左到右的线性渐变，带有透明度 */
#grad {
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
}
```
- 重复的线性渐变
```css
/* repeating-linear-gradient() 函数用于重复线性渐变，重复的线性渐变 */
#grad {
  /* 标准的语法 */
  background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
}
```
2. 径向渐变
- background-image: ==radial-gradient==(shape size at position, start-color, ..., last-color);
```css
/* 颜色结点均匀分布的径向渐变 */
#grad {
  background-image: radial-gradient(red, yellow, green);
}
/* 颜色结点不均匀分布的径向渐变 */
#grad {
  background-image: radial-gradient(red 5%, yellow 15%, green 60%);
}
```
- 设置形状
```css
/* 形状为圆形的径向渐变 */
#grad {
  background-image: radial-gradient(circle, red, yellow, green);
}
```
- 不同尺寸大小关键字的使用  
size 参数定义了渐变的大小。它可以是以下四个值：
closest-side, farthest-side, closest-corner, farthest-corner
```css
/* 带有不同尺寸大小关键字的径向渐变 */
#grad1 {
  background-image: radial-gradient(closest-side at 60% 55%, red, yellow, black);
}
#grad2 {
  background-image: radial-gradient(farthest-side at 60% 55%, red, yellow, black);
}
```
- 重复的径向渐变
```css
#grad {
  background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
}
```


### 文字特效
- ==text-shadow==: h-shadow v-shadow blur color;  
文本阴影，指定了水平阴影，垂直阴影，模糊的距离，阴影的颜色
```css
h1 {
    text-shadow: 5px 5px 5px #FF0000;
}
```
- ==box-shadow==: h-shadow v-shadow blur spread color inset;  
盒子阴影，指定了水平阴影，垂直阴影，模糊的距离，阴影的尺寸，阴影的颜色，外阴影转到内阴影
```css
div {
    box-shadow: 10px 10px 5px #888888;
}
/* 在::before 和 ::after 两个伪元素中添加阴影效果 */
#boxshadow {
    position: relative;
    b ox-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
    pa dding: 10px;
    bac kground: white;
} 
#boxshadow img {
     width: 100%;
     border: 1px solid #8a4419;
     border-style: inset;
} 
#boxshadow::after {
     content: '';
    position: absolute;
    z-index: -1; /* hide shadow behind image */
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3); 
    width: 70%; 
    left: 15%; /* one half of the remaining 30% */
    height: 100px;
    bottom: 0;
}
/* 卡片效果 */
div.card {
    width: 250px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
}
```
- ==text-overflow==: clip|ellipsis|string;  
文本溢出属性指定应向用户如何显示溢出内容
```css
p.test1 {
    white-space: nowrap; 
    width: 200px; 
    border: 1px solid #000000;
    overflow: hidden;
    text-overflow: clip; 
}
 
p.test2 {
    white-space: nowrap; 
    width: 200px; 
    border: 1px solid #000000;
    overflow: hidden;
    text-overflow: ellipsis; 
}
```
- ==word-wrap==: normal|break-word;  
自动换行属性允许您强制文本换行 - 即使这意味着分裂它中间的一个字
```css
p {word-wrap:break-word;}
```
- ==word-break==: normal|break-all|keep-all;  
单词拆分换行属性指定换行规则
```css
p.test1 {
    word-break: keep-all;
}
 
p.test2 {
    word-break: break-all;
}
```
- 新文本属性  

属性 | 描述
---|---
hanging-punctuation | 规定标点字符是否位于线框之外
punctuation-trim    | 规定是否对标点字符进行修剪
text-align-last     | 设置如何对齐最后一行或紧挨着强制换行符之前的行
text-emphasis       | 向元素的文本应用重点标记以及重点标记的前景色
text-justify        | 规定当 text-align 设置为 "justify" 时所使用的对齐方法
text-outline        | 规定文本的轮廓
text-overflow       | 规定当文本溢出包含元素时发生的事情
text-shadow         | 向文本添加阴影
text-wrap           | 规定文本的换行规则
word-break          | 规定非中日韩文本的换行规则
word-wrap           | 允许对长的不可分割的单词进行分割并换行到下一行

- @font-face  
先定义字体的名称（比如 myFirstFont），然后指向该字体文件
```css
<style> 
@font-face {
    font-family: myFirstFont;
    src: url(sansation_light.woff);
}
 
div {
    font-family:myFirstFont;
}
</style>
```

### 2D/3D转换
##### <font color="orange">2D</font>
- ==transform==: none|transform-functions;
    - translate()  
    根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动
    ```css
    {
        transform: translate(50px,100px);
        -ms-transform: translate(50px,100px); /* IE 9 */
        -webkit-transform: translate(50px,100px); /* Safari and Chrome */
    }
    ```
    - rotate()  
    在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转
    ```css
    {
        transform: rotate(30deg);
        -ms-transform: rotate(30deg); /* IE 9 */
        -webkit-transform: rotate(30deg); /* Safari and Chrome */
    }
    ```
    - scale()  
    增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数
    ```css
    {
        -ms-transform:scale(2,3); /* IE 9 */
        -webkit-transform: scale(2,3); /* Safari */
        transform: scale(2,3); /* 标准语法 */
    }
    ```
    - skew()  
    别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜
    ```css
    {
        transform: skew(30deg,20deg);
        -ms-transform: skew(30deg,20deg); /* IE 9 */
        -webkit-transform: skew(30deg,20deg); /* Safari and Chrome */
    }
    ```
    - matrix()  
    有六个参数，包含旋转，缩放，移动（平移）和倾斜功能
    ```css
    {
        transform:matrix(0.866,0.5,-0.5,0.866,0,0);
        -ms-transform:matrix(0.866,0.5,-0.5,0.866,0,0); /* IE 9 */
        -webkit-transform:matrix(0.866,0.5,-0.5,0.866,0,0); /* Safari and Chrome */
    }
    ```
##### <font color="Magenta">3D</font>
- ==transform==: none|transform-functions;
    - translate3d，translateZ(10px)
    - scale3d
    - rotate3d
- ==transform-style==: flat|preserve-3d;  
指定嵌套元素是怎样在三维空间中呈现,使用此属性必须先使用 transform 属性。默认值是flat。  
给父元素添加的，preserve-3d子元素保留3d效果
```css
div {
    transform: rotateY(60deg);
    transform-style: preserve-3d;
    -webkit-transform: rotateY(60deg); /* Safari and Chrome */
    -webkit-transform-style: preserve-3d; /* Safari and Chrome */
}
```
- ==transform-origin==: x-axis y-axis z-axis;  
允许您更改转换元素的位置（旋转中心），2D转换元素可以改变元素的X和Y轴。 3D转换元素，还可以更改元素的Z轴
```css
/* 设置旋转元素的基点位置 */
div {
transform: rotate(45deg);
transform-origin:20% 40%;
-ms-transform: rotate(45deg); /* IE 9 */
-ms-transform-origin:20% 40%; /* IE 9 */
-webkit-transform: rotate(45deg); /* Safari and Chrome */
-webkit-transform-origin:20% 40%; /* Safari and Chrome */
}
```
- ==perspective==: number|none;   
规定 3D 元素的透视效果(景深),默认值none，决定元素距离屏幕的距离。单独使用translateZ的时候给父元素加
- 3D旋转，放缩，斜切，平移
```css
div {
    perspective: 500;/* 元素距离视图的距离，以像素计 */
    -webkit-perspective: 500; /* Safari and Chrome */
}
```
- ==backface-visibility==: visible|hidden;  
定义元素背面是否可见
```css
div {
    backface-visibility:hidden;
    -webkit-backface-visibility:hidden; /* Chrome 、Safari */
    -moz-backface-visibility:hidden; /* Firefox */
    -ms-backface-visibility:hidden; /* Internet Explorer */
}
```


### 过渡/动画
##### <font color="LightGreen">过渡</font>
CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。  
要实现这一点，必须规定两项内容：  
指定要添加效果的CSS属性  
指定效果的持续时间。
- ==transition==: property duration timing-function delay;  
简写属性，用于在一个属性中设置四个过渡属性
```css
div {
    transition: all 2s;
    -webkit-transition: width 2s; /* Safari */
}
/* 添加多个样式的变换效果，添加的属性由逗号分隔 */
div
{
    transition: width 2s, height 2s, transform 2s;
    -webkit-transition: width 2s, height 2s, -webkit-transform 2s;
}
```
- transition-property: none|all| property;   
规定应用过渡的 CSS 属性的名称
- transition-duration: time;  
定义过渡效果花费的时间。默认是 0
- transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);  
规定过渡效果的时间曲线。默认是 "ease"
- transition-delay: time;  
规定过渡效果何时开始。默认是 0
```css
div {
    transition-property: width;
    transition-duration: 1s;
    transition-timing-function: linear;
    transition-delay: 2s;
    /* Safari */
    -webkit-transition-property:width;
    -webkit-transition-duration:1s;
    -webkit-transition-timing-function:linear;
    -webkit-transition-delay:2s;
}
/* 等价于 */
div {
    transition: width 1s linear 2s;
    /* Safari */
    -webkit-transition:width 1s linear 2s;
}
```

##### <font color="MediumPurple">动画</font>
当在 @keyframes 创建动画，把它绑定到一个选择器，否则动画不会有任何效果。  
指定至少这两个CSS3的动画属性绑定向一个选择器：  
规定动画的名称  
规定动画的时长
- ==@keyframes==   animationname {keyframes-selector {css-styles;}}  
规定动画
- ==animation==: name duration timing-function delay iteration-count direction fill-mode play-state;  
所有动画属性的简写属性，除了 animation-play-state 属性  
(参数一：动画名称； 参数二：完成时间。单位秒，不能省略； 参数三：缓冲描述；linear/ease/贝塞尔曲线； 参数四：延迟时间；几秒开始(只有第一次动画有延迟)； 参数五：动画次数：数字/infinite； 参数六：是否自动补全反方向动画；alternate； 参数七：是否停留在最后一帧；forwards；)
```css
div {
    /* 使用动画 */
    animation: myfirst 5s;
    -webkit-animation: myfirst 5s; /* Safari 与 Chrome */
}
/* 定义动画 */
@keyframes myfirst
{
    from {background: red;}
    to {background: yellow;}
}
 
@-webkit-keyframes myfirst /* Safari 与 Chrome */
{
    from {background: red;}
    to {background: yellow;}
}
/* 关键词 "from" 和 "to"，等同于 0% 和 100% */
@keyframes myfirst
{
    0%   {background: red; left:0px; top:0px;}
    25%  {background: yellow; left:200px; top:0px;}
    50%  {background: blue; left:200px; top:200px;}
    75%  {background: green; left:0px; top:200px;}
    100% {background: red; left:0px; top:0px;}
}
 
@-webkit-keyframes myfirst /* Safari 与 Chrome */
{
    0%   {background: red; left:0px; top:0px;}
    25%  {background: yellow; left:200px; top:0px;}
    50%  {background: blue; left:200px; top:200px;}
    75%  {background: green; left:0px; top:200px;}
    100% {background: red; left:0px; top:0px;}
}
```
- animation-name: keyframename|none;  
规定 @keyframes 动画的名称
- animation-duration: time;  
规定动画完成一个周期所花费的秒或毫秒。默认是 0
- animation-timing-function: value;  
规定动画的速度曲线。默认是 "ease"
- animation-delay: time;  
规定动画何时开始。默认是 0
- animation-iteration-count: value;  
规定动画被播放的次数。默认是 1
- animation-direction: normal|reverse|alternate|alternate-reverse|initial|inherit;  
规定动画是否在下一周期逆向地播放。默认是 "normal"
- animation-fill-mode: none|forwards|backwards|both|initial|inherit;  
规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式
- animation-play-state: paused|running;  
规定动画是否正在运行或暂停。默认是 "running"
- ==对比==: hover + transition  VS  @-webkit-keyframes + -webkit-animation 
```css
div {
    animation-name: myfirst;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-play-state: running;
    /* Safari 与 Chrome: */
    -webkit-animation-name: myfirst;
    -webkit-animation-duration: 5s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-delay: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    -webkit-animation-play-state: running;
}
/* 等价于 */
div {
    animation: myfirst 5s linear 2s infinite alternate;
    /* Safari 与 Chrome: */
    -webkit-animation: myfirst 5s linear 2s infinite alternate;
}
```

### 多列布局
- column-count: number|auto;  
指定了需要分割的列数
- column-width: auto|length;  
指定了列的宽度
- columns: column-width column-count;  
设置 column-width 和 column-count 的简写
```css
div {
    column-width:100px;
    column-count: 3;
    -webkit-column-width:100px; /* Safari and Chrome */
    -webkit-column-count: 3; /* Chrome, Safari, Opera */
    -moz-column-width:100px; /* Firefox */
    -moz-column-count: 3; /* Firefox */
}
/* 等价于 */
div {
    columns:100px 3;
    -webkit-columns:100px 3; /* Safari and Chrome */
    -moz-columns:100px 3; /* Firefox */
}
```
- column-rule-width: thin|medium|thick|length;  
指定了两列的边框厚度
- column-rule-style: none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset;  
指定了列与列间的边框样式
- column-rule-color: color  
指定了两列的边框颜色
- column-rule: column-rule-width column-rule-style column-rule-color;  
column-rule-* 所有属性的简写,设置了列直接的边框的厚度，样式及颜色
```css
div {
    column-rule-width: 1px;
    column-rule-style: solid;
    column-rule-color: lightblue;
    -webkit-column-rule-width: 1px; /* Chrome, Safari, Opera */
    -webkit-column-rule-style: solid; /* Chrome, Safari, Opera */
    -webkit-column-rule-color: lightblue; /* Chrome, Safari, Opera */
    -moz-column-rule-width: 1px; /* Firefox */
    -moz-column-rule-style: solid; /* Firefox */
    -moz-column-rule-color: lightblue; /* Firefox */
}
/* 等价于 */
div {
    column-rule: 1px solid lightblue;
    -webkit-column-rule: 1px solid lightblue; /* Chrome, Safari, Opera */
    -moz-column-rule: 1px solid lightblue; /* Firefox */
}
```
- column-fill: balance|auto;  
指定如何填充列
```css
div {
    column-fill:auto;
}
```
- column-gap: length|normal;  
指定了列与列间的间隙
```css
div {
    column-gap: 40px;
    -webkit-column-gap: 40px; /* Chrome, Safari, Opera */
    -moz-column-gap: 40px; /* Firefox */
}
```
- column-span: 1|all;  
指定 `<h2>` 元素跨越所有列
```css
h2 {
    column-span: all;
    -webkit-column-span: all; /* Chrome, Safari, Opera */
}
```

### 用户界面
- ==box-sizing==: content-box|border-box|inherit;  
允许以确切的方式定义适应某个区域的具体内容
```css
div {
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    width:50%;
    float:left;
}
```
- resize: none|both|horizontal|vertical;  
指定一个元素是否应该由用户去调整大小
```css
div {
    resize:both;
    overflow:auto;
}
```
- outline-offset: length|inherit;  
对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓  
轮廓与边框有两点不同：
    - 轮廓不占用空间
    - 轮廓可能是非矩形
```css
div {
    border:2px solid black;
    outline:2px solid red;
    outline-offset:15px;
}
```


### 其他：
- filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();  
图片滤镜
```css
/* 高斯模糊效果 */
.blur {
    -webkit-filter: blur(4px);
    filter: blur(4px);
}
/* 图片变亮 */
.brightness {
    -webkit-filter: brightness(0.30);
    filter: brightness(0.30);
}
/* 调整图片对比度 */
.contrast {
    -webkit-filter: contrast(180%);
    filter: contrast(180%);
}
/* 给图像设置一个阴影效果 */
.shadow {
    -webkit-filter: drop-shadow(8px 8px 10px green);
    filter: drop-shadow(8px 8px 10px green);
}
/* 将图像转换为灰度图像 */
.grayscale {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
}
/* 给图像应用色相旋转 */
.huerotate {
    -webkit-filter: hue-rotate(180deg);
    filter: hue-rotate(180deg);
}
/* 反转输入图像 */
.invert {
    -webkit-filter: invert(100%);
    filter: invert(100%);
}
/* 转化图像的透明程度 */
.opacity {
    -webkit-filter: opacity(50%);
    filter: opacity(50%);
}
/* 转化图像的饱和度 */
.saturate {
    -webkit-filter: saturate(7);
    filter: saturate(7);
}
/* 将图像转换为深褐色 */
.sepia {
    -webkit-filter: sepia(100%);
    filter: sepia(100%);
}
/* 复合函数，使用多个滤镜，每个滤镜使用空格分隔 */
img {
    filter: contrast(200%) brightness(150%);
    -webkit-filter: contrast(200%) brightness(150%);  /* Chrome, Safari, Opera */
}
```
 
    
- ==透明度==:
    - opacity: value|inherit;  
    作用于元素，以及元素内的所有内容的
    - rgba(red,green,blue,alpha)  
    作用于背景色,指的是红色、绿色、蓝色和Alpha透明度
    - hsla(hue,saturation,lightness,alpha)  
    作用于背景色,指的是色调、饱和度、亮度和Alpha透明度
    - ie盒子透明度:
        - filter: alpha(opacity = 0~100);
    ```css
    {
        opacity: 0.5;   /* [0.0,1.0] */
        background-color:blue;
    }
    {
        background-color: hsla(182, 44%, 76%, .5);  
        background-color: rgba(166, 218, 220, .5);
    }
    {
        filter: alpha(opacity=50); /* [0,100] */
        background-color:red;   
    }
    ```

==注意==：       
精灵图缩小或者放大几倍：  
    1. 盒子宽高缩小或者放大几倍         width height  
    2. 精灵图整个背景图缩小放大几倍     background-size  
    3. 精灵图位置也要缩小放大几倍       background-position
    
   
## 其他      

#### 最小值和最大值
min-width:320px;  
max-width:540px;

#### 滚动条样式
```
.box ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}
.box ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
.box ::-webkit-scrollbar-track {
    border-radius: 0;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.1);
}
```

#### 响应式布局(Responsive web design(响应式网页制作)RWD)：
视口宽度不同，同一个页面html，显示不同的版式css;一般局部使用。eg:taobao.com  
优点：不管视口宽度是多少，内容都显示比较饱满。  
缺点：不同的设备都需要加载大量的资源尤其是移动端需要加载大量的pc端图片或者文件等，需要大量的加载时间。同时需要花费大量的流量。（所以国内使用纯响应式网站不多）

#### 媒体查询
实现原理：同一个html加载不同的css。js很好可以实现但是现在css就能实现  
media:媒体。min-width:表示视口宽度大于或者等于加载该样式;max-width:小于等于media="screen and (min-width:1200px)"  
外链式:<link rel="stylesheet" type="text/css" href="css/media002.css">  
内嵌式：@media screen and (min-width: 1200px ) {}
```html
<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">
```
```css
.example {
    padding: 20px;
    color: white;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .example {background: red;}
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .example {background: green;}
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .example {background: blue;}
} 
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .example {background: orange;}
} 
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .example {background: pink;}
}
```

#### 存储
1. Web Storage
    localStoraage
    sessionStorage
2. Web SQL
3. 多线程：
4. 事件推送：new EventSource()
5. 拖拽事件：ondrag

#### cookies，sessionStorage 和 localStorage 的区别？
共同点：都是保存在浏览器端，且同源的。
区别:  
1. cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存
2. 存储大小限制也不同，cookie数据不能超过4k，sessionStorage和localStorage 但比cookie大得多，可以达到5M
3. 数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
4. 作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面(即数据不共享)；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的( 即数据共享 )。


#### 多线程
- 新增Worker函数： 用于开辟一个额外的线程执行某些事情  
建立一个新的js文件 并且将阻塞页面执行的代码放进去  
```js
// computer.js
var fibonacci =function(n) {
  return n <2 ? n : arguments.callee(n -1) +arguments.callee(n -2);
}; 
console.log("计算开始");
fibonacci(40);
console.log("计算结束");
// 初始化构造函数
var w = new Worker("compute.js");//此时，打开页面，就会同时执行页面的渲染和compute.js中的代码。
```
- postMessage:开辟的这个线程，用于计算，计算结果通过postMessage()函数返回
```js
// 额外的线程已经通过postMessage将信息传递回来，前端主线程接受该数据的方式是:
worker.onmessage = function(e) {
    console.log(e.data);3	
}
```

#### webSql
前端数据库，原本是HTML5的规范，但是后来又没有了。
- openDatabase
- 事务
- executeSql

#### 事件推送
在正常情况下，只能够从浏览器主动发送请求到服务器，服务器返回内容之后，关闭连接。之后，服务器想要推送信息给浏览器，无法实现。HTML5新增了一个API叫做EventSource 它可以主动将信息推送给浏览器。

#### 拖拽事件
- ondragstart
- ondrag
- ondragend
- ondragenter
- ondragover
- ondragleave
- ondrop  :在ondragover事件中return false时才会触发。

#### canvas
canvas是一块画布，为JS准备的  
默认属性有width，height。默认值是300,150  

属性:   
- fillStyle，
- strokeStyle, 
- font="bold 20px 宋体",
- lineWidth="3",
- globalCompositeOperation = "source-over"  
- canvas
- shadowOffsetX = 4
- shadowOffsetY = 4
- shadowBlur = 5
- shadowColor = "rgba(0, 0, 0, .6)";  

方法:   
- beginPath(); closePath();
- fill(); stroke();
- clearRect(x,y,w,h)
- arc(x,y,r,start,end,direction);             圆心
- fillRect(x,y,w,h); strokeRect(x,y,w,h);     左上角
- fillText("文字",x,y)                        第一个字左下角
- strokeStyle("文字", x,y)
- moveTo(x,y); lineTo(x,y); quadraticCurveTo(c1x,c1y,x,y); bezierCurveTo(c1x,c1y,c2x,c2y,x,y)
- drawImage(img/video,x,y); drawImage(img,x,y,w,h); drawImage(img,positionX,positionY,w,h,x,y,xw,yh);
- translate(x,y); rotate(x * Math.PI/180)
- save(); restore()
- getImageData(x,y,w,h); putImageData(imgData,0,0)
- createLinearGradient(0,0,ctx.canvas.width,0);


#### 移动端学习
1. 像素：pixel: picture+element:一个像素就是计算机能够显示一种特定颜色的最小区域。设备尺寸相同，像素越多画面越细致。
2. ppi:屏幕上每英寸可以显示的像素点的数量，即屏幕像素密度。dpi/ppi = 对角线分辨率/屏幕尺寸
3. 设备像素：设备屏幕的物理像素，任何设备的物理像素的数量都是固定的。eg:screen.width/height
4. css像素(逻辑像素)：是为web开发者创造的，在css和js中使用的一个抽象的层。eg:width:30px  
    在桌面端，一个css像素往往都是对应电脑屏幕的一个物理像素，而在手机端，当进行缩小操作时，一个设备像素覆盖多个css像素，当进行放大时，一个css像素覆盖了多个设备像素。无论缩小放大，元素设置的css像素(width:300px)是不变的。一个css像素对应多少设备像素是根据缩放比例来决定的。
5. dpr: 设备像素比:是默认缩放为100%的情况下，设备像素和css像素的比值。手机分辨率提高一倍，尺寸没有变化，于是DPR=2  eg:window.devicePixelRatio
6. 屏幕尺寸：1英寸=2.54厘米。对角线的长度
7. 屏幕分辨率：屏幕的像素点数，800*600,1024*768,1280*720,1600*900,1920*1080，单位是px



#### <font style="color:salmon">三栏布局</font>
两边固定宽度，中间自适应的三栏布局  
有几种布局方式？各种什么优缺点？在窗口缩小到一定程度哪些布局不会乱？高度不固定的情况下会出现什么问题？为什么会出现这种问题？有没有什么解决方法？  
如果是上下固定高，中间自适应怎么实现？ 左边固定高/宽？右边自使用呢？
1. 浮动+计算宽度
```html
<style type="">
    * {
    	padding: 0px;
    	margin: 0px;
    }
    .box {
    	overflow: hidden;
    }
    p {
    	float: left;
    	height: 200px;	
    }
    p:first-child {
    	width: 180px;
    	background-color: pink; 
    }
    p:nth-child(2) {
    	width: calc(100% - 380px);
    	background-color: skyblue; 
    }
    p:last-child {
    	width: 200px;			
    	background-color: lightgreen; 
    }
</style>
<div class="box">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>
```
2. 内减盒+绝对定位
```html
<style type="">
    * {
    	padding: 0px;
    	margin: 0px;
    }
    .box {
    	position: relative;
    	padding: 0 200px 0 180px;
    }
    p {
    	height: 200px;	
    }
    p:first-child {
	    position: absolute;
    	top: 0px;
    	left: 0px;
    	width: 180px;
    	background-color: pink; 
    }
    p:nth-child(2) {
    	width: 100%;
    	background-color: skyblue; 
    }
    p:last-child {
    	position: absolute;
    	top: 0px;
    	right: 0px;
    	width: 200px;
    	background-color: lightgreen; 
    }
</style>
<div class="box">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>
```
3. 固比固模型
```html
<style type="">
    * {
    	padding: 0px;
    	margin: 0px;
    }
    .box {
    	display: -webkit-box; 
    }
    p {
    	height: 200px;	
    }
    p:first-child {
    	width: 180px;
    	background-color: pink; 
    }
    p:nth-child(2) {
    	-webkit-box-flex: 1;
    	background-color: skyblue; 
    }
    p:last-child {
    	width: 200px;
    	background-color: lightgreen; 
    }
</style>
<div class="box">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>
```
4. 圣杯模型:浮动+相对定位
```
<style>
    * {
        padding: 0px;
        margin: 0px;
    }
    .box {
        padding: 0 200px 0 180px;
    }
    p {
        float: left;
        height: 200px;
    }
    p:first-child {
        width: 100%;
        background: skyblue;
    }
    p:nth-child(2) {
        position: relative;
        left: -180px;
        width: 180px;
        margin-left: -100%;
        background: pink;
    }
    p:last-child {
        position: relative;
        right: -200px;
        width: 200px;
        margin-left: -200px;
        background: lightgreen;
    }
</style>
<div class="box">
    <p>middle</p>
    <p>left</p>
    <p>right</p>
</div>
```
5. 双飞翼模型:浮动+子元素
```html
<style>
    * {
        padding: 0px;
        margin: 0px;
    }
    div {
        float: left;
        height: 200px;
    }
    
    #middle {
        width: 100%;
        background: skyblue;
    }

    #left {
        width: 180px;
        margin-left: -100%;
        background: pink;
    }

    #right {
        width: 200px;
        margin-left: -200px;
        background: lightgreen;
    }

    #inside {
        margin: 0 200px 0 180px;
        height: 200px;
    }
</style>
<div id="middle">
    <p id="inside">middle</p>
</div>
<div id="left">left</div>
<div id="right">right</div>
```

#### <font style="color: hotpink">flex布局</font>
设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。
- 容器的属性：
	- flex-direction:
		flex-direction属性决定主轴的方向（即项目的排列方向）。
	- flex-wrap:
		默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
	- flex-flow:
		flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
	- justify-content:	
		justify-content属性定义了项目在主轴上的对齐方式。
	- align-items:
		align-items属性定义项目在交叉轴上如何对齐。
	- align-content:
		align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
- 项目的属性：
	- order:
		order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
	- flex-grow:
		flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
	- flex-shrink:
		flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
	- flex-basis: 
		flex-basis;flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
	- flex:
		flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
	- align-self:
		align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

#### rgba和opacity的区别
- 相同点：  
rgba()和opacity都能实现透明效果  
- 不同点：  
opacity作用于元素，以及元素内的所有内容的透明度  
rgba()只作用于元素的颜色或其背景色  
hsla与rgba其实是两种颜色表示方法，本质上等价，都可以支持透明度

#### ++*页面布局总结*++
- 练习网站  mock .pm-ux-ui-fe-rd  
    - 手心输入法官网，博雅网，携程移动端，安徽龙禧，花瓣网
    - 网易公开课，360官网，酷狗音乐，民信贷，模板之家，起点中文网(异形轮播图)，时光网，小米之家，魅族，qq空间，婚恋网，
    - 王者荣耀，英雄联盟，绝地求生，中国农业银行，汽车之家，优设网。哔哩哔哩，中国移动，中国联通

     
-     -reset.css:body{} *{} a{}
      -base
      -common:公共类，包括header和footer。每个页面都共同拥有的:版心居中，a标签去下划线加颜色
      -导航：padding确定或者宽确定
      - logo:h1标签。为了提高搜索，加文字
      - 列表不一样的用class区分,加在容器身上
      - header:
      -     版心inner(量取)
      -         logoh1
      -             a
      -         nav
      -             ul
      -                 li
      -                     a
      -         lang
      -             a a
      - 最大容器：背景?高度(孩子是否有浮动)？
      - 版心：居中？ 
      - 父亲：孩子有浮动还是加个height把或者加个overflow
      - 小容器：浮动有没有，高宽，边框？内边距有没有
      - 最里面的行内元素：转化？高宽？背景？文字属性()？
      - 列表a标签。脱标的元素不设置高宽的话，由内容撑开。
      - 
      - 
- 导航栏总结
-     1、先看是导航栏包版心，还是版心包导航栏。一般导航栏分为logo(h1>a),nav(ul>li>a),语言栏。
	  2、导航栏有没有压盖效果，有的话就是绝对定位，给外面的盒子加相对定位
	  3、logo一般是用的背景图。背景图能点击就是放在a里面。h1是外面最大的盒子，包括浮动+宽高+padding
	  4、logo的a标签转块+高(宽)+背景。隐藏文字两种方法
	  5、nav左浮+高(宽)，高是防止里面的li浮动影响。li设置左浮+宽+边框。注意每个li的宽是不是一致，别掉下来。注意最后一个li有没有边框。没有层叠
	  6、看nav的a有几行文字，一行居中直接a的盒子和li一样大，要转块。如果是两行文字居中，那么两行文字放两个span。量一下行高，再算一下上内边距，从a的盒子里减去高。然后span转块，不一样的span样式层叠一下，上面span的行高算一下，下面的行高直接和文字一样高。li的背景色和边框在a里面设置。a里一行文字内边距在li里面设，a里面有多行文本在a里面设置。
	  7、设置a的悬浮效果。位置有没有移动，有的话用相对定位。没有直接修改效果
	  8、语言栏。左浮还是右浮，单行文本居中不用量行高，直接tac + lh=h,语言栏的距离用margin

- banner总结
-     1、轮播图+小圆点。一般这种大图片没有版心。轮播图和小圆点要绝对定位，所以外面banner需要相对定位+h(里面有定位不能撑高父亲)
	  2、轮播图：由于图片都叠在一起。每次只显示一张，所以用绝对定位。div>ul>li。 绝对定位的是li不是div。图片这里用背景图，居中用背景图的定位 center top 
      3、图片或者用img标签。div.banner>div.imgs>ul>li>img。banner相对定位+overflow，去掉图片多余的地方，imgs的高宽和图片原大小一致，绝对定位+居中。li绝对定位+原图片高宽。一般用这种的是图片比banner大很多而且显示的时候并没有缩到banner一样。
	  4、小圆点：有压盖效果所以用绝对定位，div>ol>li>a,绝对定位的是整个列表div不是li。li的大小加右边距，注意最后一个li可能掉下来，要么去掉最后一个li的右边距要么给ol加一个右边距的宽度。特殊的效果加类名，加在最近的一个容器身上。

- 小图标用伪元素的两种方法：
-     1、一种是：绝对定位+left+transform/margin-left居中,top调整位置
	  2、一种是：转块+margin居中+父亲padding-top调整位置
	  3、第一种可以写在li或者a里面，第二种只能写在a里面

- 特卖汇和领红包的做法：
-	  方法一：都使用绝对定位，位置通过top，left，right量取。父亲不需要padding
	  方法二：都使用浮动，位置通过父亲的padding去挤出来，不要忘记父亲内减或者使用内减盒
	  方法三：第一个不用浮动，位置让父亲的padding挤出来，第二个使用绝对定位
	  方法四：第一个使用绝对定位，第二个使用右浮动
	  综上，最简单的是方法一，方法二适合两个的上边距一样的情况，方法三比方法四少一个浮动
	  这个案例不适合第二种方法，因为两个东西距离父亲上面不一样距离。其实如果第二种方法的第二个用相对定位微调位置应该也可以

- 热门活动，广告和获取更多福利的做法同上，只不过复杂了一点点
-     方法一：三个都浮动，父亲不需要padding。
	  方法二：前两个并排了而且距离父亲一样的距离，所以前面另个可以用左浮动，距离用父亲挤，两个中间的距离用margin。最后一个距离父亲不一样用绝对定位
	  方法三：第一个不浮动，后两个绝对定位
	  方法四：前面两个绝对定位，后面一个浮动

- 特殊图形制作
-     大于号：高宽相同的盒子，设置相邻的两个边框，然后旋转。width: 7px;	height: 7px; border-top: 2px solid #fff; border-right: 2px solid #fff;  transform: rotate(45deg);
      小三角形：高宽都是0，边框的大小为盒子的一半，然后上边框加颜色，左右下边框都置为透明，最后把上边框宽度加到盒子一样大小进行一个拉伸。height: 0px; width: 0px; border: 10px solid #FC3B50; border-color: #FC3B50 transparent transparent; border-top-width: 20px;

      


