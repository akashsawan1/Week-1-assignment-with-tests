var counter = 0;
// function count(){
//     console.clear();
//     console.log(counter);
//     counter++;
//     setTimeout(count,1000);
// }
//
// setTimeout(count , 1000);

setTimeout(function count(){
    console.clear();
    console.log(counter);
    counter++;
    setTimeout(count,1*1000)      // 1*1000  means 1 sec
},1*1000);