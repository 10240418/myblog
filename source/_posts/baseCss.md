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

