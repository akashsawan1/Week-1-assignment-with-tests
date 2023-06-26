// const fs = require('fs');
// fs.readFile('akash.txt','utf-8', (err,data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     else console.log(data);
// })
//Method 2
// function readFileUsingPromise(){
//     const fs = require('fs/promises');
//     fs.readFile('akash.txt','utf-8')
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
// }
// readFileUsingPromise();

//Method 3
function readFileAsync(){
    const fs = require('fs');
    const data = fs.readFileSync('akash.txt', 'utf-8');
    console.log(data);
}
readFileAsync();