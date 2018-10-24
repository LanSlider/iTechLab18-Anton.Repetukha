const square = (n) => (n * n);
console.log(`Simple invoke square ${square(4)}`);

const memorize = (func) => {
    let cache = {};  

    let result = function(...args) {
        const arg = args[0];
        if(arg in cache) {
            console.log("from cache");
            return cache[arg];
        } 
        console.log("invoke for result");
        let res = func(arg);
        cache[arg] = res;
        return res;
    }
    return result;
}

const memorizeSquare = memorize(square);

console.log(memorizeSquare(4));
console.log(memorizeSquare(4));
console.log(memorizeSquare(6));