let promise = new Promise((resolve, reject) => {
    let second = Math.round((Math.random() * (4 - 1 + 1) + 1));
    if (second > 2) {
        resolve("console.log");
    } else {
        throw new Error("console.error"); //reject
    }
    setTimeout(() => resolve(), 2000);
})

promise.then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})