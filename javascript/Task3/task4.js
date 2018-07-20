let input = document.getElementById('input-text');
input.addEventListener("keypress", printKeyPressHandler);
let printTimeoutID = null;
const delay = 1000;

function printKeyPressHandler() {
    clearTimer(printTimeoutID);
    printTimeoutID = setTimeout(() => console.log(input.value), delay);
}

function clearTimer(timerToClear) {
    if(timerToClear != null) {
        clearTimeout(timerToClear);
    }
}