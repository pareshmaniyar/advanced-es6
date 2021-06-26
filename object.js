'use strict'
//No errors thrown even when tried manupulating - dangerous
// if a property has configurable as true, we can delete it and vice-versa
const obj = {
    "easyKey": "1prop"
};
//data descriptor
Object.defineProperty(obj, 'cantChangeDateType', {
    value: 42,
    configurable: false, //can't change
    enumerable: true, //enumerable is to get in the keys
    writable: true //writable true helps change the value in future
});
obj.easyKey = 90;
console.log(JSON.stringify(obj));
try{
    obj.cantChangeDateType = "Try but won't work";
}catch(e){
    console.log("Error:",e);
}
try{
    obj.cantChangeDateType = 21;
}catch(e){
    console.log("Error:",e);
}
obj.cantChangeDateType = "Try but won't work";
obj.cantChangeDateType = 21;
console.log(obj.cantChangeDateType);
console.log(JSON.stringify(obj));
//accessor descriptor
function CustomObject(){
    var i = 3;
    var arr = [];
    Object.defineProperty(this, 'i', {
        get(){
            console.log("Someone is trying to get somethings");
            return i;
        },
        set(setI){
            i = setI;
            arr.push(setI);
        }
    })
    this.getHistory = function(){
        return arr;
    }
}

let objInstance = new CustomObject();
console.log(objInstance.i);
objInstance.i = 2;
objInstance.i = 1;
objInstance.i = 0;
objInstance.i = "vsdf";
console.log(objInstance.i);
console.log(objInstance.getHistory());
console.log("____________-_________________");
const objFreeze = {
    a: "b"
}
objFreeze.a = "b changed";
console.log(JSON.stringify(objFreeze));
Object.freeze(objFreeze);
try {
    objFreeze.a = "b changed again";
}catch(e){
    console.log("Error Caught: ", e);
}
console.log(JSON.stringify(objFreeze));

Object.freeze(objInstance);
objInstance.i = 7;
console.log(objInstance.i);

//preventExtensions
const obj2 = {
    "l": ["p", 1]
}
obj2.k = true;
console.log(JSON.stringify(obj2));
Object.preventExtensions(obj2);
try {
    obj2.m = "ss";
} catch(e){
    console.log("preventExtensions Error");
}
console.log(JSON.stringify(obj2));

console.log(Object.keys(Object.prototype));
console.log(Object.getOwnPropertyNames(Object));

console.log(Object.length);
let arrayOfObjectKeys = Object.getOwnPropertyNames(Object);
for(let key in arrayOfObjectKeys){
    console.log(arrayOfObjectKeys[key] + ": " + Object[arrayOfObjectKeys[key]].toString());
}
console.log(Object.name);

console.log(Object.prototype)// [object Object]
console.log(Object.getPrototypeOf)// function getPrototypeOf() { [native code] }
console.log(Object.setPrototypeOf)// function setPrototypeOf() { [native code] }

console.log(Object.assign)// function assign() { [native code] }
console.log(Object.create)// function create() { [native code] }

console.log(Object.getOwnPropertyDescriptor)// function getOwnPropertyDescriptor() { [native code] }
console.log(Object.getOwnPropertyDescriptors)// function getOwnPropertyDescriptors() { [native code] }
console.log(Object.getOwnPropertySymbols)// function getOwnPropertySymbols() { [native code] }

console.log(Object.is(obj2, obj))// determines whether two values are the same value. Follow mozilla for how the values are equal. Shallow comparison
console.log(Object.defineProperties)// function defineProperties() { [native code] }
console.log(Object.defineProperty)// function defineProperty() { [native code] }

console.log(Object.preventExtensions(obj2))// function preventExtensions() { [native code] }
console.log(Object.isExtensible(obj2))// function isExtensible() { [native code] }

console.log(Object.freeze)// function freeze() { [native code] }
console.log(Object.isFrozen)// function isFrozen() { [native code] }

console.log(Object.seal)// prevents adding and/or removing properties
console.log(Object.isSealed)// Returns true if the object is sealed, otherwise false

console.log(Object.keys(obj2))// returns an array of a given object's own enumerable property
console.log(Object.getOwnPropertyNames(obj2))// Object.getOwnPropertyNames(a) returns all own properties of the object a. Object.keys(a) returns all enumerable own properties
console.log(Object.entries(Object))// returns an array of a given object's own enumerable only string-keyed property [key, value] pairs
console.log(Object.values(obj2))// returns an array of a given object's own enumerable property values

//are writable false object deletable
let obj3 = {
    "s": "d"
}
Object.defineProperty(obj3,'newNonWritableKey', {
    value: "constant",
    writable: false,
    enumerable: true,
    configurable: true
})

console.log(obj3.newNonWritableKey);
try {
    obj3.newNonWritableKey = "try changing";
}catch(e) {
    console.log("Catch writable error");
}
console.log(obj3.newNonWritableKey);


for(let [key,value] of Object.entries(obj3)){
    console.log(key + ": " + value);
}
delete obj3.newNonWritableKey;
console.log("After deletion");
for(let [key,value] of Object.entries(obj3)){
    console.log(key + ": " + value);
}
