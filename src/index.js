exports.min = function min (array) {
  if(array != undefined && array.length > 0) {
    return Math.min.apply(null, array);
        
    } else {
        return 0;
    }
}

exports.max = function max (array) {
  if(array != undefined && array.length > 0) {
    return Math.max.apply(null, array);
        
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
  if(array != undefined && array.length > 0) {
    return array.reduce((sum, current) => sum + current / array.length, 0).toFixed(2); 
    } else {
        return 0;
    }
}
