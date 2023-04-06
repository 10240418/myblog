---
title: forLove
top: false
cover: false
toc: true
mathjax: false
date: 2023-06-09 10:01:18
author:
img:
coverImg:
password:
summary:
---

# 6/9
又吵架了.但是还是一点点就是无厘头的吵架,你本来就不该吵架的
不知道哪里来的情绪,你在干嘛 ,全是在做着一些什么事,
还真是崽种说实话,为什么连就是这一点点都没办法控制
还是说就是你就是那么的贱,有些事,还是要忍耐的,要有耐心


# 6/11
不晓得为啥还是想说说话,忽然就觉得还是很好的一个人,一直都懵懵懂懂的看不见,
到底是看不见还是潜意识里面故意看不见
你就是在躲避,害怕你会犯错,实话说还是咋稍微的少点,我对你的爱其实还是不及你对我的爱的,
我感觉到了,还是媳妇压力或者还是啥的大一点也好,确实还是要体谅一点



6/20 java arraylist 数组表

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

//
class Main{
public static void main(String[] args){
ArrayList<Integer>  list = new ArrayList<>();
list.add(1);
list.add(1);
list.add(1);
System.out.println(list.get(0));//get jiushi huoqu
list.set(2,4);
System.out.println(list.get(2));
// 输出list1
System.out.println(list.get(1));
// 也就是说链表是不能超出界限的
// 但是数组是可以的
// 但是数组的长度是固定的
//删除元素
list.remove(1);
System.out.println(list.get(1));
System.out.println(list);//这就是删除了还是可以输出1为啥
// 因为这个list是一个对象
// 但是这个对象里面的元素已经被删除了'
// 但是这个对象还是存在的
// 所以输出的时候还是会输出这个对象
System.out.println(list.size());
//迭代list
for (int i = 0; i < list.size(); i++) {
System.out.println(list.get(i));
}
System.out.println("迭代器");
for ( int a   :list
) {
System.out.println(a);
}
//ArrayList的泛型只能是引用类型
// 不能是基本类型
ArrayList<Integer> a = new ArrayList<Integer>();
//必须是Interger Byte Short Long Float Double Boolean Character
// 不能是int byte short long float double boolean char


        //排序
        Collections.sort(list);
        // 就是先引入Collections这个包
        // 然后调用sort方法
        // 就可以对list进行排序了
        // 但是这个排序只能是对引用类型的排序
        // 不能是基本类型的
        // 不能是基本类型
        list.indexOf(4);
        System.out.println(list.indexOf(4));


    }

}

linklist 链表
import java.util.LinkedList;

class Main
{
public static void main(String[] args) {
//Linkedlist
/*
就是简单的一个线性表,但是每一个的表包含脸个值
和arraylist比起来的话,linkedlist的增加删除的效率高点,儿查找找和修改稍微低点

         */
        //下面就是使用LinkedLIst好点
        // 1 在开头添加元素
        LinkedList<Integer> list = new LinkedList<>();
        list.addFirst(22);
        // 2 mowei
        // 3 huoqu kaitou yuansu 
        list.addLast(33);
        System.out.println(list.get(1));
    }
}