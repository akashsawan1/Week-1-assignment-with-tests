/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('After one second');
        },1000);
    })
}

function waitTwoSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('After two seconds');
        },2*1000);
    })
}

function waitThreeSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('After three seconds');
        },3*1000);
    })
}
const startTime = new Date().getTime();
function executionTime(){
    const endTime = new Date().getTime();
    const TotalTime = (endTime-startTime)/1000;
    console.log('Total Time: ' + TotalTime);
}
// function calculateTime(){
//     Promise.all([
//         (async() => console.log(await waitOneSecond().then((data) => {console.log(data)})))(),
//         (async() => console.log(await waitTwoSecond().then((data)=> {console.log(data)})))(),
//         (async() => console.log(await waitThreeSecond().then((data) => {console.log(data)})))(),
//     ]).then(function (){
//         executionTime();
//     });
// }
function calculateTime(){
    Promise.all([
        waitOneSecond().then((data) => {console.log(data)}),
        waitTwoSecond().then((data) => {console.log(data)}),
        waitThreeSecond().then((data) => {console.log(data)})
    ]).then(() =>{
        executionTime();
    });
}

calculateTime();

