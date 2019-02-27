class Phone {
  constructor(sim, len) {
    this.sim = sim;
    this.dimension(len);
  }
  dimension(len) {
    this.len = len;
  }
}
class Iphone extends phone {
  constructor(sim, len, modelName, fingerSensor, faceRecognition) {
    super(this, sim, len);
    this.modelName = modelName;
    this.fingerSensor = fingerSensor;
    this.faceRecognition = faceRecognition;
  }
}
class OldNokia extends phone {
  constructor(sim, len, modelName, canBreakRock) {
    super(sim, len);
    this.modelName = modelName;
    this.canBreakRock = canBreakRock;
  }
}
// Es5
var Phone5 = function (sim, len, weight) {
  this.sim = sim;
  this.dim(len, weight);
}
Phone5.prototype.dim = function (len, weight) {
  this.len = len;
  this.weight = weight;
}
var Iphone5 = function (sim, len, weight, modelName, fingerSensor, faceRecognition) {
  Phone5.call(this, sim, len, weight);
  this.fingerSensor = fingerSensor;
  this.faceRecognition = faceRecognition;
}
Iphone5.prototype = Object.create(Phone5.prototype);
Iphone5.prototype.constructor = Iphone5;

