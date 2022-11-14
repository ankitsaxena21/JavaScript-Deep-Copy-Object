const obj =
{
    string: 'primitive string',
    stringObj: new String('string object'),
    number: 100,
    numberObj: new Number(100),
    nan: NaN,
    array: [1, 2, 3],
    arrayObj: new Array(2),
    bool: false,
    boolobj: new Boolean(false),
    nul: null,
    date: new Date(),
    myFunc: function() {console.log("test")},
    undef: undefined,
    inf: Infinity,
}
 

// Object.assign()  - shallow copy

const assignCopy = Object.assign({}, obj)
console.log("1", obj == assignCopy );

//Spreat operator - shallow copy

const spreatCopy = {...obj};

console.log("2", obj == spreatCopy);

// JSON.parse/stringify

const jsonCopy = JSON.parse(JSON.stringify(obj))
console.log("3", obj == jsonCopy);

// lodash - cloneDeep

var deepCopy = _.cloneDeep(obj);

console.log("3", obj == deepCopy);

//custom function
const deepClone = function(obj) {
    if (obj == null || typeof obj !== 'object') {
        return obj;
    }
  
    if (obj instanceof String) { return new String(obj); }
    if (obj instanceof Date) { return new Date(obj); }
    if (obj instanceof Number) { return new Number(obj); }
    if (obj instanceof RegExp) { return new RegExp(obj); }
    if (obj instanceof Boolean) { return new Boolean(obj); }
 
    // handle other objects if required
 
    var clone = {};
    if (obj instanceof Array) {
        clone = new Array(obj.length);
    }
 
    for (var key in obj) {
        clone[key] = deepClone(obj[key]);
    }
 
    return clone;
};
 
console.log("4", obj == deepClone(obj));
