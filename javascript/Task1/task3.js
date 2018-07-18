Array.prototype.filter = function(predicateFunction) {
    let suitableArray = [];
    for(let i=0; i<this.length; i++) { 
        if (predicateFunction(this[i], i, this))   
            suitableArray.push(this[i]);
    }    
    return suitableArray;       
};
  
console.log(JSON.stringify([1,2,3].filter(function(x) { return x > 2;})) === "[3]")