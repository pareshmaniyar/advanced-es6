console.log(sum(10,20));
// console.log(diff(10,20)); Error here!
// diff(10,20);
function sum(a,b){
    console.log(Object.getOwnPropertyNames(arguments));
    console.log(arguments);
    console.log(typeof arguments)
    return a + b;
}
let diff = function(a,b){
    return a - b;
}
