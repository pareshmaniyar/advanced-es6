var x = 1;
this.x = 2;

function f1(){
    console.log("f1",this.x);
}
f1();

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
    }
}
obj.y();
obj.z();
var f3 = obj.k();
f3();
var f4 = obj.l(f1);
f4();
console.log("****************");
