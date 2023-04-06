---
title: js1
top: false
cover: false
toc: true
mathjax: false
date: 2023-04-17 23:45:00
author:
img:
coverImg:
password:
summary:
---
## 客户端web api
当你给网页或者网页应用编写客户端的 JavaScript 时，你很快会遇上应用程序接口（API）—— 这些编程特性可用来操控网站所基于的浏览器与操作系统的不同方面，或是操控由其他网站或服务端传来的数据。在这个单元里，我们将一同探索什么是 API，以及如何使用一些在你开发中将经常遇见的 API。

###web aip简介
JavaScript——一种内置于浏览器的高级脚本语言，你可以用来实现 Web 页面/应用中的功能。注意 JavaScript 也可用于其他像 Node 这样的的编程环境。但现在你不必考虑这些。
客户端 API — 内置于浏览器的结构程序，位于 JavaScript 语言顶部，使您可以更容易的实现功能。
第三方 API — 置于第三方普通的结构程序（例如 Twitter，Facebook），使您可以在自己的 Web 页面中使用那些平台的某些功能（例如在您的 Web 页面显示最新的 Tweets）。
JavaScript 库 — 通常是包含具有特定功能的一个或多个 JavaScript 文件，把这些文件关联到您的 Web 页以快速或授权编写常见的功能。例如包含 jQuery 和 Mootools
JavaScript 框架 — 从库开始的下一步，JavaScript 框架视图把 HTML、CSS、JavaScript 和其他安装的技术打包在一起，然后用来从头编写一个完整的 Web 应用

###API 如何工作？
API 使用一个或多个 JavaScript objects 在您的代码中进行交互，这些对象用作 API 使用的数据（包含在对象属性中）的容器以及 API 提供的功能（包含在对象方法中）。

api 是基于对象的.这些对象就是作为用作api使用的数据.的容器
以及api提供的功能
geolocation的例子.这是一个非常简单的api.对象就是geolocation
position coordinates coordinates包括有关设备的
大量有用的数据.包括经纬度,高度,运动速度,以及运动方向
使用井号（#）来创建标题，井号的数量对应标题的级别。例如，使用三个井号（###）来创建三级标题（<h3>）。
使用空行来分隔段落，不要使用空格或制表符来缩进段落。
使用两个或更多的空格加上回车来创建换行或新行（<br>）。
使用反引号（`）来创建内联代码，或者使用三个反引号（```）来创建代码块。
根据这些规则，我可以把你的内容变成这样：

# bom 客户端webapi里面就是 浏览器内置的api包括就是操作文档api

api 就是应用程序接口她们就是抽象了复杂的代码.提供一些简单的接口规则直接使用, 让开发人员简单的创建复杂的功能,其实就是封装了一些代码,变的好用且简单了不少

客户端里面web api 操作文档api

## 1 document对象

## 2 bom window对象里

### window对象

简介: 在浏览器里面的全局的一些对象和属性,可以改变就是浏览器里面的一些基本的属性

1. 在gloabl作用域里面; `var sayage=() =>alert(this.age); var age = 29;` 在这样的定义下就会全变成window对象的属性,包含在里面
2. 窗口关系
3. 大小
4. 视口位置,就是内阁滚轮控制的界面
5. 导航和打开新的界面
6. 定时器 `settimeout(字符串或者函数,时间);` 比较常用的就是`if(a< b) { settimeout (x,x)}`就是限制了不少不会一直不停的干下去
   7.系统对话框`alert` 显示 `confirm` 确定 `prompt` 输入文本三个方法里面就是了

const 和let 就是不会添加到window对象里面,var 就会,区分使用就好了

### 1 narvigator

1. 检测插件
2. 注册处理系统
3. 负责提供浏览器的信息.例如就是名称平台.语言.它可以检查浏览器是否支持一些特性 例如jsva,cookie.vr等.可以使用window.navigator属性来访问navigator对象.

   `javaEnabled()` 返回一个布尔值，表示浏览器是否启用了Java
   `taintEnabled()` 返回一个布尔值，表示浏览器是否启用了数据污染
   `vibrate()` 使设备振动一定的时间
   `registerProtocolHandler()` 注册一个自定义的协议处理器
   `requestMediaKeySystemAccess()` 请求一个媒体密钥系统的访问对象

   属性 描述
   `appCodeName` 返回浏览器的代码名
   `appName` 返回浏览器的名称
   `appVersion` 返回浏览器的版本信息
   `cookieEnabled` 返回一个布尔值，表示浏览器是否启用了Cookie
   `geolocation` 返回一个Geolocation对象，用于获取设备的地理位置信息
   `language` 返回浏览器的首选语言
   `onLine` 返回一个布尔




井字棋   2023/5/4 
1 js 箭头函数
箭头函数是ES6引入的一种新的函数声明方式，可以让我们更方便地创建函数。

箭头函数的语法形式如下：

Copy
(parameters) => { statements }
其中，parameters表示函数的参数列表，可以是一个或多个参数。如果没有参数，则必须使用空括号表示。statements是函数体，可以是一条语句或多条语句。

箭头函数有以下特点：

简洁的语法形式：箭头函数可以使用更简洁的语法形式来定义函数，例如省略了function关键字和return关键字。

没有自己的this对象：箭头函数没有自己的this对象，它会继承父级作用域的this对象。这意味着，在箭头函数内部，this指向的是定义该箭头函数的父级作用域的this，而不是箭头函数自己的this。

不能作为构造函数：由于箭头函数没有自己的this对象，因此不能用作构造函数。

下面是一些使用箭头函数的示例：

javascript
Copy
// 一个简单的箭头函数
const add = (a, b) => a + b;

// 箭头函数作为回调函数
const arr = [1, 2, 3];
const newArr = arr.map(item => item * 2);

// 箭头函数内部使用父级作用域的this对象

const obj = {
name: 'Sage',
getName: function() {
return () => console.log(this.name);
}
};
const func = obj.getName();
func(); // 输出：Sage
需要注意的是，由于箭头函数没有自己的this对象，因此不能使用call()、apply()、bind()等方法来改变this的指向。

eg: 就是简单的函数的定义啥的

//箭头函数不能用构造器,new错误
var Foo = () =>{};
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
其实就是箭头函数不能作为构造函数,没有自己的this对象,导致就是不能构造函数,如果创建一个可以用来构造函数的函数就是要使用普通函数而不是箭头函数,例如下面的一个可以构造函数的
// var Foo =() => {};
// var foo = new Foo();//这样是不能构造函数的
function Foo()
{
this.bar = 'hello';
}
var foo = new Foo();
console.log(foo.bar);
//着就是号了就是简单的前面的没this对象罢了

5/5
1 是什么?
是一个申明式的,高效的灵活的用于构建用户界面的js库,用react
可以把一些简单的独立的代码片段组合成复杂 的ui界面,这些代码片段就是组件
class ShoppingList  extends React.Component {
//    就是组件类
render() /*render方法返回你希望*/{
return (
<div className="shopping-list">
<h1>Shopping List for {this.props.name}</h1>
<ul>
<li>Instagram</li>
<li>WhatsApp</li>
<li>Oculus</li>
</ul>
</div>
);
}
}


5/6

class Square extends React.Component {
render() {
return (
//渲染出来一个单独的button
<button className="square">
{/* TODO */}
</button>
);
}
}


//渲染出九个方块
class Board extends React.Component {
renderSquare(i) {
return <Square />;
}

render() {
const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
}
}
//含有默认值的一个棋盘
class Game extends React.Component {
render() {
return (
<div className="game">
<div className="game-board">
<Board />
</div>
<div className="game-info">
<div>{/* status */}</div>
<ol>{/* TODO */}</ol>
</div>
</div>
);
}
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);


5/9
// 定义 Square 组件，表示每个格子
class Square extends React.Component {
render() {
// 通过 props 获取格子的值和点击事件处理函数
return (
<button className="square" onClick={() => this.props.onClick()}>
{this.props.value}
</button>
);
}
}

// 定义 Board 组件，表示游戏棋盘
class Board extends React.Component {
// 渲染每个格子
renderSquare(i) {
// 通过 props 获取当前格子的值和点击事件处理函数
return (
<Square
value={this.props.squares[i]}
onClick={() => this.props.onClick(i)}
/>
);
}

    render() {
        // 渲染九宫格
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

// 定义 Game 组件，表示游戏主界面
class Game extends React.Component {
constructor(props) {
super(props);
// 初始化状态
this.state = {
history: [
{
squares: Array(9).fill(null),
},
],
stepNumber: 0,
xIsNext: true,
};
}

    // 点击事件处理函数，更新状态
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            // 如果已经有一方获胜或者当前格子已经有值了，则不做任何操作
            return;
        }

        // 更新当前格子的值
        squares[i] = this.state.xIsNext ? "X" : "O";

        // 更新状态
        this.setState({
            history: history.concat([
                {
                    squares: squares,
                },
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    // 跳转到指定步数
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        // 渲染历史记录
        const moves = history.map((step, move) => {
            const desc = move ? "Go to move #" + move : "Go to game start";
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        // 渲染游戏界面
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// 判断是否有获胜者
function calculateWinner(squares) {
const lines = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

// 渲染游戏界面
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

通过这篇教程，我们接触了 React 中的一些概念，比如 React 元素、React 组件、props，还有 state。


jsx 简介
const element = <h1>hello,world </h1>;
是js 的一个语法扩展,描述ui应该有交互的本质形式.jsx也是可以生成react元素,在探讨就是怎么渲染位dom,本质上喝其他 的ui逻辑内在耦合,比如就是胡在ui里面需要绑定的处理事件,在js代码里面就是jsx和ui放在一起会在视觉上会有辅助作用
jsx就是一个把js和ui结构和样式结合起来的一个扩展,它使得创建react组件变得非常容易和直观
const name = 'Josh Perez';
const element = <h1>hello,{name}</h1>;
function formatName(user)
{

}
希望看见的内容/

5/22
组件
js创建组件
1 函数组件
必须大写开头,必须返回值
表单处理
受控组件的表单处理
表单元素,表单元素里面的可变的状态,再setstate里面修改

2 步骤
state ={text:' sdf'}
3 文本框
input
textarea value = this.state.constent
select 下拉框  
表单的受控组件

1 添加就是name = state.txt
2 表单的类型获取 属性的值
3 再chang事件里面就是秀给name'该对应的state


项目的介绍

1 
这个礼拜的内容就是做出来一个项目了
2 


5/23
class Main{
public boolean isNumber (String s ){
s = s.trim();
// 1 拿到数组以后就是把首位的空额
if(s.length() == 0)
return false;
// 2 如过就是空数组的话就是false

        boolean numFlag = false;
        //1 数字的话就是对的,但是如果的符号位的话就是只会出现在
        // 第一位或者指数后面的第一位
        boolean dotFlat  = false;
        boolean eFlag= false;


        for (int i = 0; i < s.length(); i++) {

            char ch = s.charAt(i);
            if(ch >= '0' && ch <= '9'){
                numFlag = true;

                //判断就是数字还是啥的
            }else if(ch == '+' || ch =='-'){
                if(i != 0 && s.charAt(i - 1) != 'e' && s.charAt(i - 1 ) !=
                'E')
                    return false;

                //如果是+-号的话就是判断是不是就是
                //只会出现在第一位和e E的后面才会出现
                
            }else if (ch == '.'){
                //2 只能出现一次而且不能出现在指数后面
                // 就是一开始的dotFlat会是false 而且就是eflag是false
                if(dotFlat || eFlag){
//                    dotFlat = true;
return false;
}
else dotFlat = true;//
//就是小数点的问题//.. 会出现问题就是说喽如果.
//出现的话就是变成true就好了

            }else if(ch == 'e' || ch =='E'){
                if(!numFlag || eFlag) {
                    return false;
                    // e 前面要有数后面叶要数
                }
                    eFlag = true;
                    numFlag = false;//后面没数的话就会变的false//简直就是天才
                }  else {
                    return false;
                }
            }


         return numFlag;
        }




