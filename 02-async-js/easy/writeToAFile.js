//Method 1
// const fs = require('fs');
// var tobeWritten = 'this is a test to write in a file.';
// function afterWrite(err){
//     if(err){
//         console.log(err);
//         return;
//     }
//     else console.log('File has been Rewritten')
// }
// fs.writeFile('akash.txt',tobeWritten,'utf-8',afterWrite)
//Method 2
// function AsyncMethod(){
//     const fs = require('fs');
//     let data = "This is by using Async Method";
//     fs.writeFile('akash.txt',data,console.log('Succesfull wrote'),err => console.log(err));
// }
// AsyncMethod();

//Method 3
// function promiseMethod(){
//     const fs = require('fs/promises');
//     const data = 'this is written by using the promise Method';
//     fs.writeFile('akash.txt',data)
//         .then(console.log('This is by using Promise method'))
//         .catch(err => console.log(err))
// }
// promiseMethod();

//Method 4
function SyncVersion(){
    const fs = require('fs')
    const data = "This is written using Sync"
    fs.writeFileSync('akash.txt', data);
}
SyncVersion();