//global scope
var a = 1;
var a = 1; //valid to declare multiple times

let greeting = "say Hi";
/*
let greeting = "say Hello instead";//error: Identifier 'greeting' has already been declared
*/
//const declarations are block scoped like let
//const cannot be updated or re-declared
console.log(a);//1
(function one() {
  console.log(a);//1
})();
//local scope
(function two() {
  var a = 2; 
  console.log(a);//2
})();
(() => {
  var a = 2; 
  console.log(a);//2
})();
(function four() {
  if (true) {
    var a = 2;
  }
  console.log(a);//2
})();
console.log("...");
(function four() {
  if (true) {
    let a = 2;
  }
  console.log(a);//1
})();
console.log("***");
(function four() {
  {
    let a = 2;
  }
  console.log(a);//1
})();
console.log("...");
(() => {
  {let a = 2; }
  console.log(a);//1
})();
//object prop
function five () {
  this.a = 5;
}
console.log(new five().a);//5
//closure
function six () {
  var a = 6;
  return function () {
    return a;
  }
}
var p = six();
console.log(p());//6
//prototype-based scope resolution
function seven() {
  this.a = 7;
}
seven.prototype.a = -1; //not reachable
seven.prototype.b = 8; //not reachable
console.log(new seven().a);//7
console.log(new seven().b);//8
//Global+Local
(() => {
  console.log(a);//undefined
  var a = 9;
  console.log(a);//9
})();
//catch clause-scoped
try {
  throw 10
} catch (a) {
  console.log(a);//10
}

