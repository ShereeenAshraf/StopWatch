const appendTens = document.getElementById("tens");
const appendMints = document.getElementById("min");
const appendSecons = document.getElementById("seconds");
const buttonStart = document.getElementById("button_start");
const buttonStop = document.getElementById("button_stop");
const buttonReset = document.getElementById("button_reset");

let min=0;
let seconds = 0;
let tens = 0;
let interval; //to store timer values

//start funcation

function startTimer(){
    tens++;

    if(tens<9){
        appendTens.innerHTML = "0" +tens;
    }

    if(tens>9){
        appendTens.innerHTML = tens;
    }
    if(tens>99){
        seconds++;
        appendSecons.innerHTML = "0" +seconds;
        tens= 0;
        appendTens.innerHTML = "0" + 0
    }
    if(seconds > 9){
        appendSecons.innerHTML = seconds;
    }
    if(seconds>59){
        min++;
        appendMints.innerHTML = "0" +min;
        seconds= 0;
        seconds.innerHTML = "0" + 0
    }
    if(min > 9){
        appendMints.innerHTML = min;
    }
}


buttonStart.onclick = function (){
    interval = setInterval(startTimer);
}

buttonStop.onclick = function(){
    clearInterval(interval);
}

buttonReset.onclick = function(){
    clearInterval(interval);
    tens="00";
    seconds="00";
    min="00";
    appendSecons.innerHTML= seconds;
    appendTens.innerHTML = tens;
    appendMints.innerHTML = min;
}

