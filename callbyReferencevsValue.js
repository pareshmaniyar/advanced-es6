/**
 * Javascript is always pass by value, but when a variable refers to an 
 * object (including arrays), the "value" is a reference to the object.
 * 
 * Changing the value of a variable never changes the underlying primitive
 * or object, it just points the variable to a new primitive or object.
 * 
 * However, changing a property of an object referenced by a variable does
 * change the underlying object.
 */

function f(a,b,c) {
  a = 2;
  b.push("new content");
  c.value = false;
}
a = 1;
b = ["old content"];
c = {value: true};
console.log(a);
console.log(b);
console.log(JSON.stringify(c));
console.log("After function call");
f(a,b,c);
console.log(a);
console.log(b);
console.log(JSON.stringify(c));
//Array
let a1 = ["1", "2", {foo:"bar"}];
let c1 = a1;
console.log(c1);//call by reference
console.log("After changing values:");
a1[2] = {bat: "man"}
a1[1] = "4";
a1[0] = true;
console.log(c1);
//Object
let a2 = {b: "1", b0: "1.0", c: 2, d: ["old"], e: {f: "g", h: {i: "j"}}, q: true};
let c2 = a2;
let c3 = JSON.parse(JSON.stringify(a2));
console.log(c2);//call by reference
console.log(c3);//call by value
console.log("After changing values:");
a2.q = false;
a2.b = "2";//changing type
a2.b0 = 3;
a2.c = 3;
a2.d = ["new"];
a2.d.push("newer");
a2.e = {bat: "man"}
console.log(c2);
console.log(c3);
