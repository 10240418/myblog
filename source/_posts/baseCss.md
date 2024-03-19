---
title: baseCss
top: false
cover: false
toc: true
mathjax: false
date: 2024-03-15 17:15:49
author:
img:
coverImg:
password:
summary:
---
# 1.1css可以继承和不可以继承的属性有那些
## 1.1.1不可以继承的属性以及具体解释
- display
- margin
- border
-文本属性
- 盒子模型的属性 weight height margin border padding 
- 背景属性 background background-color background-image background-repeat background-attachment background-position
- 定位属性 position float clear z-index
- 生成内容属性 content
- 轮廓 outline-color outline-style outline-width outline
- 页面样式属性 page-break-before page-break-after page-break-inside
- 光标属性 cursor cursor
- 阴影属性 box-shadow text-shadow
- 声音样式属性 speak pause rest

## 1.1.2可以继承的属性以及具体解释
- 字体属性 font font-style font-variant font-weight font-size line-height font-family
- 文本属性 text-align text-indent text-decoration text-transform letter-spacing word-spacing white-space'
- 元素可见性 visibility
- 表格布局属性 border-collapse border-spacing caption-side empty-cells table-layout
- 光标属性 cursor

# 2.1 display block inline he inline-block  的区别
## 2.1.1 display block
- block元素会在新的一行开始，宽度自动填满其父元素宽度
- block元素可以设置宽高，margin和padding属性
- block元素可以容纳内联元素和其他块元素

## 2.1.2 display inline
- inline元素不会在新的一行开始
- inline元素的宽度不可设置，宽度随内容而定
- inline元素的高度不可设置，高度随内容而定

## 2.1.3 display inline-block
- inline-block元素不会在新的一行开始
- inline-block元素的宽度和高度可以设置
- (1)行内 设置宽高无效,可以设置margin和padding 不能设置垂直方向的 不会自动换行
- (2)块级 设置宽高有效,可以设置margin和padding 设置margin 和padding 可以自动换行 多个块级


# 3.1 隐藏元素方法
## 3.1.1 display:none
- display:none 隐藏元素，不占据空间

## 3.1.2 visibility:hidden
- visibility:hidden 隐藏元素，但是占据空间

## 3.1.3 opacity:0
- opacity:0 隐藏元素，但是占据空间

## 3.1.4 position:absolute;left:-9999px
- position:absolute;left:-9999px 隐藏元素，但是占据空间

## 3.1.5 height:0;width:0
- height:0;width:0 隐藏元素，但是占据空间

## 3.1.6 overflow:hidden
- overflow:hidden 隐藏元素，但是占据

## 3.1.7 clip-path:inset(100%)
- clip-path:inset(100%) 隐藏元素，但是占据空间

## 3.1.8 transform:scale(0)
- transform:scale(0) 隐藏元素，但是占据空间


# 4.1 lingk和@import的区别
## 4.1.1 link
- link是XHTML标签，除了加载CSS外，还可以定义RSS，定义rel连接属性等
- link标签除了可以加载CSS外，还可以定义RSS，定义rel连接属性等
- link引用CSS时，在页面载入时同时加载
- link标签引用CSS时，在页面载入时同时加载

## 4.1.2 @import
- @import是CSS提供的一种方式，只能加载CSS
- @import是CSS提供的一种方式，只能加载CSS
- @import引用CSS时，在页面载入时同时加载

# 5.1 transition和animation的区别
## 5.1.1 transition
- transition是CSS3的属性，用于控制元素的过渡效果

## 5.1.2 animation
- animation是CSS3的属性，用于控制元素的动画效果

## 5.1.3 transition和animation的区别
- 就是一个需要触发一个事件,一个不需要触发事件

# 6.1 伪元素和伪类的区别和作用
## 6.1.1 伪元素
- 伪元素是用来创建一些不在文档树中的元素，并为其添加样式
- p::before{content:"";display:block;width:100px;height:100px;background:red;}



## 6.1.2 伪类
- 伪类是用来添加一些选择器的特殊效果


# 7.1 css错题
## 7.1.1 css错题
- 1.1css 指的是csacading style sheets 
- 1.2css 有三种引入方式 再head 部分引用外部样式表
- 1.3 改变文本颜色的是 color
- 1.4 文本以大写字母开头 text-transform:capitalize
- 1.5 文本粗体 font-weight:bold


# 8.1 对requestAnimationFrame的理解
## 8.1.1 requestAnimationFrame
- 实现动画效果 settimeout transition和animation canvas 以及html5 有一个专门请求动画的api 那就是请求动画帧
- requestAnimationFrame 是浏览器专门为动画提供的API reqestAnimationFrame的优势在于充分利用显示器的刷新机制，比较节省系统资源 
- 使用例子如下
- var id = requestAnimationFrame(callback);
- cancelAnimationFrame(id);
- requestAnimationFrame(callback) 会返回一个id，这个id可以用来取消这个动画帧的回调函数



# 9.1 translate
## 9.1.1 translate
- translate() 方法允许您修改元素的位置，不会影响页面布局
- translate() 方法允许


# 10.1 css3新的特性
## 10.1.1 css3新的特性
- css3新的特性有很多，比如圆角，阴影，渐变，动画，多列布局，媒体查询等等
- 圆角: border-radius:50%
- 阴影: box-shadow:10px 10px 5px #888888
- 渐变: background:linear-gradient(red,blue)
- 动画: animation:myfirst 5s infinite   @keyframes myfirst{from{background:red}to{background:yellow}}
- 多列布局: column-count:3
- 媒体查询: @media screen and (max-width:600px){body{background-color:lightblue}}    @media print{body{background-color:white;color:black}}
- 2D转换: transform:rotate(20deg)


# 11.1 margin 和padding 
## 11.1.1 margin 和padding
- margin 和padding 是css中的两个属性，margin是外边距，padding是内边距

# 12.1 line-height
## 12.1.1 line-height
- 激文本的高度
- line-height和height 都能撑开一个高度
  - line-height:1.5 1.5倍行高  1.5*字体大小   1.5*16px     24px    百分比


# 13.1 css提高性能和优化
## 13.1.1 css提高性能和优化
- css提高性能和优化有很多方法，比如减少http请求，压缩css文件，减少选择器的嵌套，减少使用通配符，减少使用@import等等
- 减少http请求
- 压缩css文件
- 减少选择器的嵌套
- 减少使用通配符

# 14.1 css预处理/后处理
## 14.1.1 css预处理/后处理
- css预处理/后处理有很多，比如sass，less，stylus，postcss等等
- sass
- less
- stylus

# 15.1 :: 和 :
## 15.1.1 :: 和 :
- :: 和 : 是css中的伪元素和伪类的标识符
- :: 伪元素

# 16.1 文本溢出
- overflow : hidden
- text-overflow: ellipais
- white-space :nowrap 

## 16.1.2 多行文本一处
- display: -webkit-box;
- -webkit-box-orient: vertical;
- -webkit-line-clamp: 3;


# 17.1 判断元素是不是到达了可视区域
## 17.1.1 判断元素是不是到达了可视区域
- window.innerHeight 可视区域的高度
- document.body.scrolltop || document.documentElement.scrollTop 就是浏览器滚动条滚动的高度
- offsetTop 元素到顶部的距离a
- offsetHeight 元素的高度
- 


# 18.1 cz-index
## 18.1.1 cz-index
\


# 19.1 csstransform 有那些属性
## 19.1.1 csstransform 有那些属性
- translate 位移
- scale 缩放
- rotate 2d旋转
- skew 2d倾斜 就是角度


# 20.1 页面布局
## 20.1.1 包括像素 百分比,



# 21.1 水平垂直居中的实现
## 21.1.1 水平垂直居中的实现
- 绝对定位 top:50% left:50% transform:translate(-50%,-50%) 
- flex布局 align-items:center justify-centent:center 
- table-cell布局 display:table-cell vertical-align:middle text-align:center
- grid布局 display:grid place-items:center  place-content:center  align-items:center justify-content:center



# 22.1 如何根据设计搞进行移动端适配 
## 22.1.1 如何根据设计搞进行移动端适配
- 适配不同像素密度 1px 2px 3px  1px = 0.5pt
- 适配不同屏幕尺寸 375px 750px 1125px


# 23.1 对flex布局的理解
## 23.1.1 对flex布局的理解
- flex布局是一种新的布局方式，可以很方便的实现水平垂直居中，等分布局，自适应布局等等
- 弹性布局  设置一个布局以后子元素的floatclearvertich-align属性失效,默认两个轴
- flex-direction 决定主轴方向 
- flex-wrap 决定子元素是否换行
- justify-content 决定子元素在主轴上的对齐方式
- align-items 决定子元素在交叉轴上的对齐方式
- align-content 决定多根轴线的对齐方式


# 24.1 响应式布局
## 24.1.1 响应式布局







# 25.1 场景应用
## 25.1.1 实现一个三角形



# 26.1 js数据类型 
- 栈:原始数据类型Undefined NUll Boolean Number String
- 堆:引用数据类型 Object Function Array
## 26.1.1 




