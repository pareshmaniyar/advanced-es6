(function abc() {
    var a = b = '42';
})();
console.log(typeof a);
console.log(typeof b);
console.log(b);//42 as declared global
// console.log(a); not defined
var x = 21;
var gift = function () {
    console.log(x);
    var x = 20;
}
gift();
(function () {
    console.log(x);
    var x = 20;
})();
var c = 0;
console.log(a = b = c);

function abc() {
    function x() {
        console.log("m");
    }
    x();
    function x() {
        console.log("n");
    }
    x();
}
abc();
