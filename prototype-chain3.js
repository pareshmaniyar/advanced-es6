const Car = function () {};
Car.prototype = {
  print() {
    return 'I am Bat Mobile';
  }
}
const ToyCar = function(){};
ToyCar.prototype = Object.create(Car.prototype);
ToyCar.prototype.print = function(){
  return 'I am Toy Bat Mobile';
}

const ToyTransformer = function(){};
ToyTransformer.prototype = Object.create(ToyCar.prototype);
ToyTransformer.prototype.print = function() {
  return 'I am Optimus Prime'
}
const toyota = new Car();
const legoCar = new ToyCar();
const OptimusPrime = new ToyTransformer();
console.log(toyota.print());
console.log(legoCar.print());
console.log(OptimusPrime.print());
