function printTime() {
    var hour = new Date().getHours();
    const seconds = new Date().getSeconds();
    const minutes = new Date().getMinutes();
    var last = 'AM';

    if (hour >= 12 && minutes > 0) {
        last = 'PM';
        if (hour > 13) {
            hour = hour - 12;
        }
    }

    console.log(hour + ':' + minutes + ':' + seconds + ' ' + last);
}
function Thetime(){
    console.clear();
    printTime();
}
setInterval(Thetime , 1*1000);