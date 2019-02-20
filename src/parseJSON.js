// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

//boolean, 
//string, number, array, object, null, undefined, function

// object
//     {}
//     { members }
// members
//     pair
//     pair , members
// pair
//     string : value
// array
//     []
//     [ elements ]
// elements
//     value 
//     value , elements
// value
//     string -> done
//     number -> done
//     object -> done
//     array  -> done
//     true -> done 
//     false -> done 
//     null  -> done
//      undefined??

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var objParser = function(obj) {
    //two cases: no members, and members
    // if no members -> return '{}'
    // if members -> go to the members function
    var mainObj = {};
    if (obj === '{}') {
      return mainObj;
    } else {
      var firstMember = membersParser(/* first member*/);
      return;
    }
  };
  var membersParser = function(members) {
    //two cases: only one pair, or multiple pairs
    // if only one pair, then
  }; 
  var pairParser = function (pair) {
    var pairObj = {};
    
    return "'string':0" ; 
  };
  
  var arrayParser = function(array) {
    var arr = [];
    if (array === '[]') {
      return arr;
    } else {
      arr.push();
      array.substring();
      return arrayParser(array);
    }
    return elementsParser(); //this should return an array
  };
  
  var elementsParser = function(elements) {
    //base case
    if (elements === '[]') {
      return ;
    } else { // recursive case
      
    }
    
  };    
  
  var valueParser = function(value) {
    if (value.charAt(1) === '"' && value.charAt(value.length - 2) === '"') {
      return value.substring(1, value.length - 1);
    } else if (typeof Number(value) === 'number') {
      return Number(value);
    } else if (value.substring(1, value.length - 1) === 'true') {
      return true;
    } else if (value.substring(1, value.length - 1) === 'false') {
      return false;
    } else if (value.substring(1, value.length - 1) === 'null') {
      return null;
    } else if (value.substring(1, value.length - 1) === 'undefined') {
      return undefined;
    } else if (value.charAt(1) === '[' && value.charAt(value.length - 2) === ']') {
      return arrayParser(value);
    } else if (value.charAt(1) === '{' && value.charAt(value.length - 2) === '}') {
      return objParser(value);
    }
  };

  
};
