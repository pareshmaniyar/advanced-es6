var x = 1;
function f(){
  x = 2;
  return function (){
    console.log(x);
  }
}
x = 3;
f()();