Array.prototype.filter = function(predicateFunction) {
    if (typeof(predicateFunction) === 'undefined') {
        throw new Exception("Undefined callback func");
    }
    let suitableArray = [];
    for(let i=0; i<this.length; i++) { 
        if (predicateFunction(this[i]))   
            suitableArray.push(this[i]);
    }    
    return suitableArray;       
};
  
console.log(JSON.stringify([1,2,3].filter(function(x) { return x > 2;})) === "[3]")