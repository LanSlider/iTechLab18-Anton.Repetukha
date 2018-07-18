var ratings = [2,3,1,4,5];

var result = ratings.reduce(function(value1, value2) {return value1 > value2 ? value1 : value2;})

console.log(result);