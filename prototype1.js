//prototype concept
//function --> prototype --> methods, properties
//object function --> prototype --> methods, properties

let X = function(j) {
  this.i = 0;
  this.j = j;
  this.getj = function(){
    return this.j;
  };
};

let x1 = new X(1);//objects, instances of X
let x2 = new X(2);
console.log(x1.getj());
//Each object has its own getj method. 
//Suppose there are thousand object. 
//That would be reduntant and inefficient memory usage
//Hence, push it to prototype
//below is an example of geti which is in prototype
X.prototype.geti = function() {
  return this.i;
}
console.log(x1.geti());

