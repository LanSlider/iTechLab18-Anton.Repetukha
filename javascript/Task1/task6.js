Array.prototype.reduce = function(combiner, initialValue) {
    var result = (initialValue === undefined) ? 0 : initialValue;
    for(let i=0; i < this.length; i++) {
        result = combiner(result, this[i], i, this);
    }
    return result;
}

console.log([1,2,3].reduce(function(memo, item) { return memo + item; }) == [6]);
console.log([1,2,3].reduce(function(memo, item) { return memo + item; }, 10) == [16]);