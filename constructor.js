'use strict'
// check new for contructor function

//regular function
let add = function (m,n) {
  return m+n
}
//constructor function
let SuperHero = function (strength) {
  if(!new.target) throw 'Vashi: Black sheep';
  this.strength = strength;
}

let Flash = new SuperHero('Fast');
console.log(Flash);
let ProfessorX = new SuperHero('Mind Control');
console.log(ProfessorX);
//achieving private property using closures
let Planet = function (_planet) {
  this.setPlanet = function (planet) {
    _planet = planet;
  }
  this.getPlanet = function () {
    return _planet;
  }
}
let ReachPlanet = new Planet("Venus");
console.log(ReachPlanet.getPlanet());
ReachPlanet.setPlanet("Mars");
console.log(ReachPlanet.getPlanet());
