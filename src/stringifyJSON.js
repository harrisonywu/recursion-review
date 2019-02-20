// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number') {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  } else if (typeof obj === 'function') {
    return undefined;    
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'undefined') {
    return undefined;
  } else if (typeof obj === 'boolean') {
    if (obj === true) {
      return 'true';      
    } else {
      return 'false';
    }
  } else if (Array.isArray(obj)) {
    var str = [];
    obj.forEach(function(elem) {
      var stringifiedElem = stringifyJSON(elem);
      str.push(stringifiedElem);
    });
    return '[' + str.join(',') + ']';    
  
    // var lastElem = obj[obj.length-1];
    // var stringedLastElem = stringifyJSON(lastElem);
    // obj.pop();
    // return stringedLastElem + stringifyJSON(obj);
  } else if (typeof(obj) === 'object') {
    var str = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
      } else {
        var value = stringifyJSON(obj[key]);
        var keyString = '"' + key + '"';
        var keyValPair = keyString + ':' + value;
        str.push(keyValPair);  
      }
    }

    return '{' + str.join(',') + '}';
    
  }
  
};
