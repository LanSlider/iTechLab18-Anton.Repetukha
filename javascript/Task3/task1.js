let btn = document.getElementById('btn-hello')
btn.addEventListener("click", printTimeout);
let print = null;

function printTimeout() {
    clearTimer(print);
    print = setTimeout(() => console.log("Hello world"), 5000); 
}
  
function clearTimer(TimerToClear) {
    if(TimerToClear != null) {
        clearTimeout(TimerToClear);
    }
}