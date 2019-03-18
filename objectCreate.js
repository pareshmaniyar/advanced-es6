console.dir(Object);
console.dir(JSON.stringify(Object));//undefined
const myObject = Object.create(Object.prototype);
const myLiteral = {};
const noProto = Object.create(null);
console.log(myObject);
console.log(myLiteral);
console.log(noProto);//no properties

const Car = function (color) {
  this.color = color;
}
const car1 = new Car('orange');//running the constructor
const car2 = Object.create(Car.prototype);//
console.log(car1);
console.log(car2);
// Main objective of Object.create is to extend constructors
Car.prototype = {
  getColor() {
    return this.color;
  }
};
//set toyCar's proto to Car's proto
const ToyCar = function () {

}

ToyCar.prototype = Object.create(Car.prototype);
const legoCar = new ToyCar();
console.log(legoCar instanceof ToyCar);
console.log(legoCar instanceof Car);
console.log(legoCar instanceof Object);
console.dir(ToyCar.prototype.isPrototypeOf(legoCar));
// console.log(_.has(legoCar,color));not working
if (legoCar.color !== 'undefined') {
  console.log(legoCar.color);
  console.log("color is a property of object");
}
if(legoCar.hasOwnProperty('color')) {
  console.log("color is a property of object");//failing
}


