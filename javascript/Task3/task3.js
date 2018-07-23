let btn = document.getElementById('btn-seconds')
btn.addEventListener("click", printMessageHandler);
let messageTimeoutID = null;
let secondsTimeoutID = null;
let clicked = false;
const message = "Hello";
const maxSecondValue = 4;
const minSecondValue = 1;

function printMessageHandler () {
    clicked = !clicked;
    if(clicked) {
        let secondCount = randomSecondCount(minSecondValue, maxSecondValue);
        printSeconds(secondCount);
        messageTimeoutID = setTimeout(() => {
            console.log(message);  
            clicked = false;        
        }, secondCount * 1000);
    }
    else {
        clearTimeout(messageTimeoutID);
        clearInterval(secondsTimeoutID);
    }
}

function randomSecondCount(minValue, maxValue) { 
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

function printSeconds(secondCount) { 
    console.log(secondCount + " seconds");
    secondsTimeoutID = setInterval(() => {
        if(secondCount <= 1) {
            clearInterval(secondsTimeoutID);
        } 
        else {
            console.log(--secondCount + " seconds");
        }
    }, 1000);
}