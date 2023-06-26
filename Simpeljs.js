// const start = 0;
//
// function executionTime() {
//     const end = Date.now();
//     console.log("totaltime:  "+ (end-start));
// }
// executionTime();
function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('After one second');
            resolve(); // Resolve the promise after the timeout
        }, 1000);
    });
}

function waitTwoSeconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('After two seconds');
            resolve(); // Resolve the promise after the timeout
        }, 2000);
    });
}

function waitThreeSeconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('After three seconds');
            resolve(); // Resolve the promise after the timeout
        }, 3000);
    });
}

function calculateTime() {
    const startTime = new Date().getTime(); // Start measuring time

    Promise.all([
        waitOneSecond(),
        waitTwoSeconds(),
        waitThreeSeconds()
    ]).then(() => {
        const endTime = new Date().getTime(); // End measuring time
        const totalTime = (endTime - startTime) / 1000; // Calculate total time in seconds
        console.log('Total time:', totalTime);
    });
}

calculateTime();
