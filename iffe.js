/**
 * 
 * 1. name collison avoidance
 * 2. can't be called anywhere else
 * 3. uses global scope
 */

var foo = "foo";

(function (innerFoo) {
    // Outputs: "foo"
    console.log(innerFoo);
})(foo);

(function () {
    var foo = "bar";

    // Outputs: "bar"
    console.log(foo);
})();

let f1 = function(){
    console.log(this.foo);
}
f1();
f1.bind(this);
f1();

