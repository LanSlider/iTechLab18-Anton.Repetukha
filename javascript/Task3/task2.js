let btn = document.getElementById('btn-welcome')
btn.addEventListener("click", printInterval);
let print = null;
let clicked = false;

function printInterval() {
    if(!clicked) {
        print = setInterval(() => console.log("You are welcome!"), 3000); 
        clicked = true;
    }
    else {
        clearTimer(print); 
        clicked = false;
    }
}
  
function clearTimer(TimerToClear) {
    clearInterval(TimerToClear);
}
