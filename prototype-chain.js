let f = function() {
    this.a = 1,
    this.b = 2
}
f.prototype = { b: 3, c: 4}; //seems wierd that it is working
let z = new f();
z.prototype = { b: 5 , d: 6};
console.log(z.a);
console.log(z.b);
console.log(z.c);
console.log(z.d);
console.log(z.e);

g = { a: 1, function(){ console.log('asdad')} }
console.log(g);

var q = {
    a: 2,
    function() {
        return this.a + 1;
    }
}

console.log(q.function());

var p = Object.create(q);
p.a = 3;
console.log(p.function());





