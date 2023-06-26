/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
console.log("start")
function wait(n) {
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve('resolved after ' + n + " sec");
        },n*1000)
    } )
}

wait(5).then((data)=>{
    console.log(data);
})
console.log("end");