let newMap = new Map();
let str = "string";
let obj = {s: "a"};
let func = function(){
    console.log("Inside Function");
}
let num = 3;
newMap.set(str, "String value");
newMap.set(obj, {"Obj value key": "Obj value value"});
newMap.set(func, "function");
newMap.set(3, "number!");

console.log(newMap.get("string"));
console.log(newMap.get(obj));
console.log(newMap.get({s: "a"}));// undefined
console.log(newMap.get(func));
console.log(newMap.get(function(){
    console.log("Inside Function");
}));// undefined
console.log(newMap.get(3));

let mySet = new Set();
mySet.add(str);
mySet.add(str);
mySet.add(obj);
mySet.add(obj);
mySet.add(func);
mySet.add(func);
mySet.add(num);
mySet.add(num);
console.log(mySet);
console.log(Array.from(mySet));
