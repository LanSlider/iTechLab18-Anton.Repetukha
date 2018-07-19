let arr = [];
let maxSeconds = null;

let random = Math.round((Math.random() * (9 - 1 + 1) + 1));
for(let i=0; i < random; i++) {
    arr.push(printFunction(i));
}  

function printFunction(index) {
    return new Promise((resolve) => {
        let seconds = Math.round((Math.random() * (9 - 1 + 1) + 1));
        if(seconds > maxSeconds) {
            maxSeconds = seconds;
        }
        setTimeout(() => {
            console.log(index +"-n function, " + seconds + " seconds"); 
            resolve();  
        }, seconds * 1000);
    })
}

Promise.all(arr).then(function() {
    console.log("Congratulation! Function's time are " + maxSeconds + " seconds");
})



