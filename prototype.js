let Car = function(color) {
  this.color = color;
  this.getColor = function () {
    return this.color;
  }
};
Car.prototype.setColor = function(color) {
  this.color = color;
}
let redCar = new Car('orange');
console.log(redCar);
//__proto__ is the creator of the Object
redCar.setColor('red');
console.log(redCar);