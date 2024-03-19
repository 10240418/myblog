---
title: baseJs
top: false
cover: false
toc: true
mathjax: false
date: 2024-03-18 12:53:23
author:
img:
coverImg:
password:
summary:
---

# 1 箭头函数和普通函数的区别
## 1.1 箭头函数
- let fn = (a,b)=> a+b;
- 箭头函数没有自己的this，它的this是继承而来的
- 箭头函数没有arguments  arguments是函数自带的一个类数组对象  但是箭头函数没有
- 箭头函数没有prototype属性 也就是说箭头函数不能作为构造函数使用 
- prototype是函数独有的属性  箭头函数没有prototype属性  也就是说箭头函数不能作为构造函数使用


## 1.2 普通函数
- 普通函数有自己的this，它的this是调用时决定的



# 2 原型链
## 2.1 原型链
- 原型链是由对象组成的链式结构
- 对象有__proto__属性，指向创建该对象的构造函数的prototype属性
- 构造函数的prototype属性指向一个对象，这个对象包含了实例对象共享的属性和方法
- 实例对象有__proto__属性，指向构造函数的prototype属性
- 实例对象的__proto__属性指向构造函数的prototype属性，这样就形成了一个链式结构，这个链式结构就是原型链
- 原型链的作用是实现继承
- 原型链的终点是Object.prototype.__proto__ === null
- Object.prototype.__proto__ === null
- Object.prototype是所有对象的祖先
- Object.prototype是原型链的终点




# 3 扩展运算符
## 3.1 扩展运算符
- 扩展运算符是三个点... 就是取出参数对象中的全部可以遍历的属性,拷贝到当前对象之中
- 扩展运算符的作用是合并对象
- 扩展运算符的作用是合并数组
- 扩展运算符的作用是合并字符串
- 扩展运算符的作用是合并Map
- 扩展运算符的作用是合并Set
- 扩展运算符的作用是合并类数组对象
- 扩展运算符的作用是合并函数参数


# 4 new操作符
## 4.1 new操作符
- 创建一个新的空对象
- 设置原型,把对象的原型设置为函数的prototype
- 让this指向这个对象,执行构造函数代码,为新对象添加属性
- 判断函数的返回值类型,如果是

# 5 map和weakMap的区别
## 5.1 map和weakMap的区别
- Map本质就是键值对的集合,但是普通的只能是字符串,es6的map数据结构类似于对象,但是建不限制范围,可以是任意类型
- set方法设置键名key对应的键值value,然后返回整个map结构,如果key已经有值,则会覆盖
- get方法读取key对应的键值,如果找不到key,则返回undefined
- has方法返回一个布尔值,表示key是否在当前map对象之中
- delete方法删除某个键,返回true,如果删除失败,返回false
- clear方法清除所有成员,没有返回值
- size属性返回map结构的成员总数
- Map的键是弱引用,键所引用的对象是强引用,这就表示只要map的键不被引用,就会被垃圾回收机制回收
- WeakMap的键是弱引用,键所引用的对象是强引用,这就表示只要map的键不被引用,就会被垃圾回收机制回收


# 6 map结构原生提供三个遍历器的生成函数和一个遍历方法
## 6.1 map结构原生提供三个遍历器的生成函数和一个遍历方法




# 7 js内置对象
## 7.1 值属性,这些全局属性返回也给简单值,这些值没有这几的属性和方法,例如Infinity,NaN,undefined,null字面量
## 7.2 函数属性,全局行数可以直接调用,eval,parseFloat,parselnt
## 7.3 基本对象,这些对象是基本数据类型的基础对象,这些对象是构造函数,这些对象在使用时可以不用new操作符
## 7.4 错误对象,这些对象是抛出错误的异常,这些对象是构造函数,这些对象在使用时可以不用new操作符
## 7.5 数字和日期对象,这些对象是数字和日期的包装对象,这些对象是构造函数,这些对象在使用时可以不用new操作符


# 8 对json的理解
- JSON.stringfy 吧符合JSON格式的数据结构变成JSON字符串


# 9  什么是dom和bom
- DOM是文档对象模型,是针对XML但是扩展开来的,是针对HTML的,DOM把整个页面映射成一个多层节点结构,HTML文档可以看做是节点树,DOM提供了操作节点的方法和属性
- BOM是浏览器对象模型,浏览器对象模型提供了独立于内容的、可以与浏览器窗口进行交互的对象,包括location,history,screen,window,document,frames,navigator等对象



# 10 ajax的原理
- 创建一个XMLHttpRequest对象,也就是创建一个异步调用对象

# 11 常见的dom操作
- 获取元素 document.getElementById()  document.getElementsByTagName()  document.getElementsByClassName()  document.querySelector()  document.querySelectorAll()
- 创建元素 document.createElement()
- 删除元素 removeChild()  remove()
- 添加元素 appendChild()  append()  insertBefore() 
```angular2html
// 首先获取父节点
var container = document.getElementById('container')
// 创建新节点
var targetSpan = document.createElement('span')
// 设置 span 节点的内容
targetSpan.innerHTML = 'hello world'
// 把新创建的元素塞进父节点里去
container.appendChild(targetSpan)
``` 
- 修改元素的属性 setAttribute()  getAttribute()  removeAttribute()
- 修改元素的样式 style className  classList
- 修改元素的内容 innerHTML  innerText  textContent  outerHTML outerText
# 12 严格模式
- 严格模式是一种特殊的执行模式,它使得Javascript在更严格的条件下运行
- 严格模式下,变量必须声明后再使用
- 严格模式下,函数的参数不能有同名属性,否则报错  严格模式下,不允许删除变量,不允许删除函数  严格模式下,不允许删除未定义的变量



