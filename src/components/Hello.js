//const name = "Xoejang";

const displayMessage = () => 
{
    return "I Love You";
}

function Hello()
{
    //return <h1>Hello World! { name } </h1>
    //return <h1>10 + 20 = { 10 + 20 } </h1>
    return <h1>The Message is: { displayMessage() } </h1>
}

//another syntax
//const Hello = ()=> <h1>Hello There!</h1>

export default Hello;