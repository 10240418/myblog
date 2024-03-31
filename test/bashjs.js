//1 对象创建函数
function create(obj){
    function F(){}
    F.prototype = obj;
    return new F();
}

let a = create({gretting:'nihao'});
console.log(a)

//2 instaceof 函数
function myInstanceof(left, right) {
// 检查左操作数是否为对象
    if (typeof left !== 'object' || left === null) {
        return false;
    }

// 获取左操作数的原型
    let proto = Object.getPrototypeOf(left);

// 沿着原型链向上查找，直到找到 right 的原型或者到达顶部（null）
    while (proto !== null) {
// 如果找到了 right 的原型，返回 true
        if (proto === right.prototype) {
            return true;
        }
// 继续向上查找
        proto = Object.getPrototypeOf(proto);
    }

// 如果没找到，返回 false
    return false;
}

// 示例用法
function Person(name) {
    this.name = name;
}

let john = new Person('John');
console.log(myInstanceof(john, Person)); // 应该返回 true
console.log(myInstanceof(john, Object)); // 应该返回 true
console.log(myInstanceof(john, Array)); // 应该返回 false，因为 john 不是数组的实例


//