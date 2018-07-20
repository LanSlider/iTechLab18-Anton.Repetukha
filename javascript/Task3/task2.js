let btn = document.getElementById('btn-welcome')
btn.addEventListener("click", printIntervalHandler);
let printIntervalID = null;
let clicked = false;
const delay = 3000;
const message = "You are welcome!";

function printIntervalHandler() {
    clicked = !clicked;
    if(clicked) {
        printIntervalID = setInterval(() => console.log(message), delay); 
    }
    else {
        clearTimer(printIntervalID); 
    }
}
  
function clearTimer(timerToClear) {
    clearInterval(timerToClear);
}