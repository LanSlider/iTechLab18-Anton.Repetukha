let arr = [];
let maxSeconds = null;

let random = randomSecondCount()
for(let i=1; i < random; i++) {
    let seconds = randomSecondCount();
    if(seconds > maxSeconds) {
        maxSeconds = seconds;
    }
    arr.push(printFunction(i, seconds));
}  

function printFunction(index, seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(index +"-n function, " + seconds + " seconds"); 
            resolve();  
        }, seconds * 1000);
    })
}

function randomSecondCount() {
    return Math.round((Math.random() * (10 - 1) + 1));;
}

Promise.all(arr).then(function() {
    console.log("Congratulation! Function's time are " + maxSeconds + " seconds");
})