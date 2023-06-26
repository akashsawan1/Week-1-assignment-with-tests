const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is resolve");
    }, 5*1000);
    setTimeout(() => {
        reject("This is reject");
    },5*1000);
})
// var promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("This is resolve");
//     }, 5*1000);
// })



const onFulliment =(result) => {
    console.log(result);
    console.log("This is on fullfillment")
}
const onRejection= (error) => {
    console.log(error);
    console.log("This is on rejection");
}
promise
    .then(onFulliment)
    .catch(onRejection);
//the code written down here does the same work as the above (25-27)
// promise.then((data) => {
//     console.log(data);
//     console.log("this is on fullfillment")
// })

