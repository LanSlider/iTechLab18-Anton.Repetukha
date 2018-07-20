// function doSomethingAsync() {
//     return new Promise(function (resolve) {
//         resolve();
//     });
// }
// function somethingComplicated() {
//     return new Promise((resolve, reject) => {reject("error") }) 
// }

function anAsyncCall() {
    var promise = doSomethingAsync();
    return promise.then(function() {
        somethingComplicated();
        // return somethingComplicated();
    });
    // return promise;
}
// anAsyncCall()
//     .catch((e) => {console.log("Error: " + e);})

// anAsyncCall();