function printTime(){
    var hour = new Date().getHours();
    const seconds = new Date().getSeconds();
    const minutes = new Date().getMinutes();
    var last = 'AM';
    var hours = 0;
    if(hour > 12 && minutes > 0){
        last = 'PM'
        if(hour > 13){
            hours = hour - 12;
        }
    }
    console.log(hours +':' + minutes+':'+ seconds +' '+last);
}
function Thetime(){
    console.clear();
    printTime();
}
setInterval(Thetime , 1*1000);