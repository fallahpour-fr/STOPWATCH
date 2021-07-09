'use strict'

const startButton = document.querySelector('.control-time--start');
const stopButton = document.querySelector('.control-time--stop');
const resetButton = document.querySelector('.control-time--reset');
const tens = document.querySelector('#tens');
const second = document.querySelector('#second');
const min = document.querySelector('#min');
let val = tens.innerText;
let val1 = second.innerText;
let val2 = min.innerText;
let myVar;

startButton.addEventListener('click', startingMinute);
stopButton.addEventListener('click', stoppingMinute);
resetButton.addEventListener('click', resetingMinute);


function startingMinute() {
    myVar = setInterval(myTimer, 10);
}

function stoppingMinute() {
    clearInterval(myVar);
}

function resetingMinute() {
    clearInterval(myVar);
    val = 0;
    tens.innerText = val;
    val1 = 0;
    second.innerText = val1;
    val2 = 0;
    min.innerText = val2;
}


function myTimer() {
    if (val <= 99) {
        val++;
        tens.innerText = val;
        console.log(val);
        if (val == 99) {
            val1++;
            console.log(val1);
            second.innerText = val1;
            val = 0;
        }
        if (val1 == 59) {
            val = 0;
            val1 = 0;
            second.innerText = val1;
            val2++;
            min.innerText = val2;
          
        }
    }
}