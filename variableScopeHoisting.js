/*
let, const
- not hoisted
- redeclaration not possible

var
- hoisted
- redeclaration possible

*/
// console.log(a);//not defined
// console.log(f);//not defined
let a = "a";
const f = "f";
// let a = "a changed"; // not accepted
console.log(a);//a
console.log(b);//undefined
console.log(c);//undefined
var b = "b";
var b = "b changed"; // accepted
console.log(b);
if(true) {
    var c = "c";
    let d = "d";
}
console.log(c); //c
// console.log(d); // not defined

function abc() {
    console.log(b);
}

function n() {
    let b = "won't print";
    abc(); // b changed
}
n();