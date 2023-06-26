function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function waitOneSecond() {
    return delay(1000);
}

function waitTwoSecond() {
    return delay(2000);
}

function waitThreeSecond() {
    return delay(3000);
}

function calculateTime() {
    const startTime = Date.now();

    return Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
        .then(() => {
            const endTime = Date.now();
            const totalTime = endTime - startTime;
            console.log(`All promises resolved in ${totalTime} milliseconds.`);
        });
}


calculateTime();