/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */
console.log('start')
async function sleep (seconds) {
    let promise = new Promise(resolve => {
        setTimeout(()=> {
            resolve('resolved after '+seconds+" mili seconds")
        },seconds)
    })
    let result = await promise;
    console.log(result);
    console.log('end')
}
sleep(5000)
// async function halt() {
//     const halting = await sleep(5000).then((data) => {
//         console.log(data);
//     })
// }
// halt();
// // sleep(5000).then((data)=> {
// //     console.log(data);
// // })
//
// console.log('end');
