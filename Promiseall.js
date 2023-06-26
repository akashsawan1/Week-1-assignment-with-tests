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
function calculateTime(){
    Promise.all([
        waitOneSecond().then((data) => {console.log(data)}),
        waitTwoSecond().then((data) => {console.log(data)}),
        waitThreeSecond().then((data) => {console.log(data)}),
    ]).then(function (){
        executionTime();
    });
}

calculateTime();