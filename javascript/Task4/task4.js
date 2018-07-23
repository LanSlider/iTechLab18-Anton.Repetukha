let arr = [];
let maxSeconds = null;
let minSecondValue = 1;
let maxSecondValue = 10;

let random = randomSecondCount(minSecondValue, maxSecondValue);
for(let i=1; i < random; i++) {
    let seconds = randomSecondCount(minSecondValue, maxSecondValue);
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

function randomSecondCount(minSecondValue, maxSecondValue) {
    return Math.round((Math.random() * (maxSecondValue - minSecondValue) + minSecondValue));;
}

Promise.all(arr).then(function() {
    console.log("Congratulation! Function's time are " + maxSeconds + " seconds");
})