function formaName(user)
{
    return user.firstName + ' ' + user.lastName;

}

const user = {
    firstName : 'Harper',
    lastName: ' Perez'
};
const element = (
    <h1>
        hello ,{ formaName(user)}!
    </h1>
)
//就是调用js函数的结果然后把结果嵌入h1
//元素里面,便于阅读 {}
//jsx变  成普通的函数调用
//

const isloading = true
const loadDate = () =>
{
    if(isloading)
    {
        return <div> Loading ...</div>

    }
    return  <div>shuju jiazaiwangcheng</div>

}
const title = (
    <h1>

    </h1>
)
