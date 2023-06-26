// const promise = new Promise((resolve, reject) => {
//     const test = false;
//     if(test){
//         setTimeout(() => {
//             resolve("resolved");
//         },5*1000);
//     }
//     else {
//         setTimeout(() => {
//             reject("rejected")
//         },10*1000);
//     }
// })
// const onFulliment =(result) => {
//     console.log(result);
//     console.log("This is on fullfillment")
// }
// const onRejection= (error) => {
//     console.log(error);
//     console.log("This is on rejection");
// }
// promise
//     .then(onFulliment)
//     .catch(onRejection);

function getCheese() {
    return "akash";
}
getCheese((data) => {
    console.log(data);
})
