var x = 1;
function f(){
  x = 2;
  return function (){
    console.log(x);
  }
}
x = 3;
f()();


createBase = function(i){
  return function(j){
    return i + j;
  }
}

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

//Creating a private counter
function counterA(){
  let c = 0;
  return function(){
    c = c + 1;
    return c;
  }
}
let a = counterA();
let b = counterA();
console.log("a: ", a());
console.log("a: ", a());
console.log("a: ", a());
console.log(b());
console.log(a());
console.log(b());


function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function(increment) { _counter += increment; },
    retrieve: function() { return 'The counter is currently at: ' + _counter; }
  }
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5); 
c.add(9); 

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14