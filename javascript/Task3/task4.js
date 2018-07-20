let input = document.getElementById('input-text');
input.addEventListener("keypress", printKeyPress);
let print = null;

function printKeyPress() {
    clearTimer(print);
    print = setTimeout(() => console.log(input.value), 1000);
}

function clearTimer(TimerToClear) {
    if(TimerToClear != null) {
        clearTimeout(TimerToClear);
    }
}