var msg = "";
promise1=new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        msg+="my";
        resolve(msg);

    } , 2000)
})
promise2=new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        msg+="first ";
        resolve(msg);

    } , 2000)
})

promise3=new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        msg+="promise";
        resolve(msg);

    } , 2000)
})
var printResult=(results)=>{console.log("results= ",results, "message=",msg)}

function main()
{
    Promise.all([promise1, promise2 , promise3]).then(printResult);
    Promise.all([promise1, promise2 , promise3]).then(printResult);
    Promise.all([promise1, promise2 , promise3]).then(printResult);
    console.log("\"\""+msg);
}
main();