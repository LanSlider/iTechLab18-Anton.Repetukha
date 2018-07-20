function anAsyncCall() {
    var promise = doSomethingAsync();
    return promise.then(function() {
        somethingComplicated();
    });
}