let btn = document.getElementById('btn-hello')
btn.addEventListener("click", printTimeoutHandler);
let printTimeoutID = null; 
const delay = 5000;
const message = "Hello world";

function printTimeoutHandler() {
    clearTimer(printTimeoutID);
    printTimeoutID = setTimeout(() => console.log(message), delay); 
}
  
function clearTimer(timerToClear) {
    if(timerToClear != null) {
        clearTimeout(timerToClear);
    }
}