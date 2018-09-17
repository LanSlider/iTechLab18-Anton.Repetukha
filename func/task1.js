let x = 5;

const add = (...param) => {return param.reduce(function(sum, curr) {return sum + curr;}, 0)}

const partialApplication = ((add, ...partialArgs) => {
  return function(...args) {
    return add.apply(this, partialArgs.concat(args));
  }
})   

const addMoreNumbers = partialApplication(add, x);

console.log(JSON.stringify(add(5, 10, 5, 3)));
console.log(JSON.stringify(addMoreNumbers(10, 5, 3)));