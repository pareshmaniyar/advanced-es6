//conclusion: __proto__ for Object and prototype for contructor function
//below line doesn't work if function is replaced with () => {}
let f = function() {
  this.a = 1,
  this.b = 2,
  this.func2 = () => { console.log('func2 direct property function', this.a, this.c)};
}
//f.prototype = { b: 3, c: 4, func: () => console.log('prototype function: ', this.c, this.a, this)};//wrong way to add prototype properties
f.prototype.b = 3;
f.prototype.c = 4;
f.prototype.func4 = () => { console.log('func4 prototype function: ', this.c, this.a, this);}// doesn't works
f.prototype.func = function() { console.log('func prototype function: ', this.c, this.a, this);}//works
f.prototype.func3 = function() { console.log('func3 Single prototype function declaration: ', this.c, this.a, this);}
console.log(f);//[Function: f]
// f.__proto__ = {e: 7};//not correct

let z = new f();

// f.__proto__ = {h: 7};//not correct
// z.__proto__ = {g: 8};
// z.prototype = { b: 5 , d: 6};//not correct
// console.log(f.a);//un
// console.log(f.b);//un
// console.log(f.c);//un
// console.log(f.h);//7
// console.log(f.e);//un
// console.log(f.__proto__);//{h:7}
// console.log(JSON.stringify(z));//{"a":1,"b":2,"prototype":{"b":5,"d":6}}
console.log("z and z.__proto__:", z, z.__proto__);//
console.log(z.a);//1
console.log(z.b);//2
console.log(z.c);//un
console.log("z.d",z.d);//un
console.log("z.e",z.e);//un
console.log(z.g);//8
console.log("z.h", z.h);//un
console.log('z.__proto__',z.__proto__);//{g:8}
z.__proto__.func();
z.func();
z.func2();
z.func3();
z.func4();//doesn't work, points to global object

g = { a: 1, function(){ console.log('asdad')} }
console.log("g is: ", g);
var q = {
  a: 2,
  function() {
    return this.a + 1;
  }
}
console.log('q.function()',q.function());

var p = Object.create(q);

p.a = 3;
console.log(p.function());
q.a = 4;
console.log('q.function()', q.function());
console.log(p.function());
