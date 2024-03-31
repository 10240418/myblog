---
title: mysql
top: false
cover: false
toc: true
mathjax: false
date: 2024-03-31 15:09:21
author:
img:
coverImg:
password:
summary:
---

# 1 日期类型
- date


# 2 字段约束
- not null 非空
- unique 唯一 
- 对数据表的列的数据限制
- primary key 主键
- 保证数据的有效性 完整性 正确性
- foreign key 外键 not null unique primary key : 非空加唯一
- check 约束条件
- foreign key 外键约束


# 3 创建学生表
```sql
create table student(
    id int primary key,
    name varchar(20) not null,
    age 
);
```
第三题
select s.a,s.b,s.c,s.d,t.c,t.d,t.e,t.f from s,t where s.c = t.c;
select s.a,s.b,s.c,s.d,t.c,t.d,t.e,t.f from s,t where s.a < t.r;
select s.c,s.d, t.* from s inner join t on 1=1;
第四题
select spj.sno from spj  where spj.jno = 'J1';
select spj.sno from spj  where spj.jno = 'J1' and spj.pno = 'P1';
select spj.sno from spj  and spj.pno in (select pno from p where color = '红');
select distinct spj.jno from spj where jno  not in (
    select distinct jno;
    from spj
    where sno = '天津' and pno in(
      select distinct pno 
      from spj 
      where color = '红'
);

select jno from spj
where sno='s1'
and pno in(select distinct(pno) from spj
where sno='s1')
group by jno
having count(jno)=
(select count(a.pno) as sum_pno
from
(select pno from spj where sno='s1'group by pno) as a
)

第五题
select sname, city from s;
select jno from where sno = 's1';
select sno from spj where sno in(
select sno from s where city = '上海'
));
select jno from spj where sno not exists(
select sno  from s where city = '天津'
);
update spj set sno = 's3'  where sno = 's5' and jno = 'j4' and pno = 'p6';
insert into spj(sno,jno , pno , qty) values('s2','j6','p4',200);

第九题
create View v1 as select sno, pno, qty from spj
where jno =(select jno from j where jname = '三建');

select pno, qty from v1;
select pno, qty from v1 where sno = 's1';