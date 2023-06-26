const fs = require('fs');
function clean(sentence){
    var sentence1 = sentence.split(" ");
    const finalArr = [];
    for(var i=0; i<sentence1.length;i++){
        if(sentence1[i].length ===0){
        } else {
            finalArr.push(sentence1[i])
    }
    }
    const answer = finalArr.join(" ");
    return answer;
}


fs.readFile('Sawan.txt','utf8', (err,data) => {
    if(err){
        console.log(err);
        return;
    }
    const cleaneddata = clean(data);
    fs.writeFile('akash.txt',cleaneddata , err => console.log('done'));
})