const lazy = function (func) {
    let result = null; //undefined 
    return function() { 
        return result? result : result = func.apply(this, arguments);
    }
}; 

let someVariable = "Hello world!";

const getSomeVariable = lazy(() => (someVariable));

console.log(getSomeVariable());

someVariable = "Some edit";

console.log(getSomeVariable());