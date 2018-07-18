Array.prototype.map = function(projectionFunction) {
    let arr = [];
    if (typeof(projectionFunction) === 'undefined') {
       throw new Exception("Undefined callback func"); 
    } 
    for (let i = 0; i < this.length; i++) {
      arr.push(projectionFunction(this[i]));
    }
    return arr;
  };
    
  console.log(JSON.stringify([1,2,3].map(function(x) { return x + 1; })));