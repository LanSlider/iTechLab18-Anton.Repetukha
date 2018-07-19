btn = document.getElementById('btn-seconds')
btn.addEventListener("click", printMessage);
let messagePrint = null;
print = null;
clicked = false;
const message = "Hello";
let second = null;

function printMessage () {
    if(!clicked) {
        second = Math.round(Math.random() * (4 - 1) + 1);
        printSeconds(second);
        messagePrint = setTimeout(function() {
            console.log(message);   
            clicked = false;      
        }, second * 1000);
        clicked = true;  
    }
    else {
        clearTimeout(messagePrint);
        for(let i=print.length; i>0; i--) {
            clearTimeout(print);
        }
        clicked = false;
    }
}

function printSeconds(second) {
    for(let i=second, temp=0; i > 0; i--, temp++) {
        print = [setTimeout(() => {
            console.log(i + " seconds");          
        }, temp * 1000)];
    }
}