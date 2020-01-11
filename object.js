'use strict'
//No errors thrown even when tried manupulating - dangerous
const obj = {
    "easyKey": "1prop"
};
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

const objFreeze = {
    "a": "b"
}
objFreeze.a = "b changed";
console.log(JSON.stringify(objFreeze));
Object.freeze(objFreeze);
try {
    objFreeze.a = "b changed again";
}catch(e){
    console.log("Error Caught: ");
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

