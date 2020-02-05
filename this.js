var x = 1;
this.x = 2;

function f1(){
    console.log("f1",this.x);
}
f1();

var y0 = function(){
    console.log("y0",this.x);
}
y0();
var y = () => {
    console.log(this.x);
}
y();

(function f2(){
    console.log(this.x);
})();

console.log(this.x);
console.log("****************");

var obj = {
    x: 3,
    y: function() {
        console.log(this.x);
    },
    z: () => {
        console.log(this.x);
    },
    k: function() {
        return function() {
            console.log("k",this.x);
        }
    },
    l: function(p){
        return p;
    },
    m: function(p){
        return p.bind(this);
    },
    n: (p) => {
        return p;
    }
}
obj.y();
obj.z();
var f3 = obj.k();
f3();
var f4 = obj.l(f1);
f4();
var f5 = obj.m(f1);
f5();
var f6 = obj.n(f1);
f6();
console.log("****************");
