function delay(duration){
    return new Promise((resolve) => {
        return setTimeout(resolve, duration);
    })
} 
    
function logHi(){
    console.log('hi');
}
delay(2000).then(logHi);