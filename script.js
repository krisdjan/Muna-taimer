let isRunning = false;

function myTimer(time) {
    if(isRunning) {return}
    isRunning = true;
    let sec = 0;
    if (time < 10) {
        time = '0' + time;
    }
    let timer = setInterval(function(){
        //lõpp
        if(time == 0 && sec == 0) {clearInterval(timer);}

        //sekund väiksem kui 10
        if(sec < 10) {sec = '0' + sec;}
        document.getElementById('timerLocation').innerHTML = time + ":" + sec;
        sec--;

        //minuti vahetus
        if(sec < 0) {
            time--;
            // minut väiksem kui 10
            if(time < 10) {time = '0' + time;}
            sec = 59;
        }
    }, 1000);
}