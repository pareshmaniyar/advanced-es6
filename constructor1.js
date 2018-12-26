let Mammal = function (legs) {
  this.legs = legs
}
Mammal.prototype = {
  walk() {
    return 'walking'
  },
  sleep() {
    return 'sleeping'
  }
}
let Bat = function (legs, isVeg) {
  Mammal.call(this, legs);
  this.isVeg = isVeg;
}
console.log('Bat.prototype: ', Bat.prototype);
console.log(Bat.prototype.constructor);
Bat.prototype = Object.create(Mammal.prototype);
console.log('Bat.prototype: ',Bat.prototype);
console.log(Bat.prototype.constructor);
console.log(Bat.prototype.__proto__);
Bat.prototype.constructor = Bat;
console.log(Bat.prototype.constructor);
Bat.prototype.fly = function(){
  return 'flying';
}
console.log('Bat.prototype: ', Bat.prototype);
let vegBat = new Bat(4, true);
console.dir(vegBat.sleep);
console.dir(vegBat.legs);
