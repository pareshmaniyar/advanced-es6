// All data types available in Javascript
/*
1. Object
2. 
*/
//List of methods available on Data types
//Other global methods
let arr = ["Function",];
for(let i = 0;i < arr.length;i++){
    for(let [key, value] in [arr[0]]){
        console.log("key: ", key, ", value: ", value);
    }
}

console.log("Function: ", Object.getOwnPropertyNames(Function));
console.log("Function.prototype: ", Object.getOwnPropertyNames(Function.prototype));
console.log("Math: ", Object.getOwnPropertyNames(Math));
// console.log("Math.prototype: ", Object.getOwnPropertyNames(Math.prototype));
console.log("Number: ", Object.getOwnPropertyNames(Number));
console.log("Number.prototype: ", Object.getOwnPropertyNames(Number.prototype));
console.log("BigInt: ", Object.getOwnPropertyNames(BigInt));
console.log("BigInt.prototype: ", Object.getOwnPropertyNames(BigInt.prototype));
console.log("Date: ", Object.getOwnPropertyNames(Date));
console.log("Date.prototype: ", Object.getOwnPropertyNames(Date.prototype));
console.log("String: ", Object.getOwnPropertyNames(String));
console.log("String.prototype: ", Object.getOwnPropertyNames(String.prototype));
console.log("RegExp: ", Object.getOwnPropertyNames(RegExp));
console.log("RegExp.prototype: ", Object.getOwnPropertyNames(RegExp.prototype));
console.log("Array: ", Object.getOwnPropertyNames(Array));
console.log("Array.prototype: ", Object.getOwnPropertyNames(Array.prototype));
console.log("Map: ", Object.getOwnPropertyNames(Map));
console.log("Map.prototype: ", Object.getOwnPropertyNames(Map.prototype));
console.log(Array.length);