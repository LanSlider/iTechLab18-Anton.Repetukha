btn = document.getElementById('btn-welcome')
btn.addEventListener("click", printInterval);
print = null;
clicked = false;

function printInterval() {
    if(!clicked) {
        print = setInterval(() => console.log("You are welcome!"), 3000); 
        clicked = true;
    }
    else {
        clearTimer(); 
        clicked = false;
    }
}
  
function clearTimer() {
    clearInterval(print);
}
