let input = document.getElementById('input-text');
input.addEventListener("keypress", printKeyPress);
print = null;

function printKeyPress() {
    clearTimer();
    print = setTimeout(() => console.log(input.value), 1000);
}

function clearTimer() {
    if(print != null) {
        clearTimeout(print);
    }
}