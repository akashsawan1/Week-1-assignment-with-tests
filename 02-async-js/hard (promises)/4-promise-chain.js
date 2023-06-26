/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('After one second');
        },1000)
    })
}

function waitTwoSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('After two seconds');
        },2000);
    })
}

function waitThreeSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('After Three seconds');
        },3000)
    })
}
const startTime = new Date().getTime();
function execution(){
    const stopTime = new Date().getTime();
    const finalTime = (stopTime- startTime)/1000;
    console.log(finalTime);
}
function calculateTime() {
    waitOneSecond().then((data) => (console.log(data)))
        .then(() => waitTwoSecond().then((data) => {console.log(data)}))
        .then(() => waitThreeSecond().then((data) => {console.log(data)}))
        .then(() => execution())
}
calculateTime();