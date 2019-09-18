//Sources: https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind
// for reference
var pokemon = {
  firstname: 'Pika',
  lastname: 'Chu',
  getPokeName: function() {
      var fullname = this.firstname + ' ' + this.lastname;
      return fullname;
  }
};
var changePokemonName = function() {
  this.firstname = 'Pikaa';
  console.log(this);//points to binded object
  return 'done';
};
var logPokemon = changePokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
console.log(logPokemon);//[Function: bound ChangePokemonName]
logPokemon();/**{ firstname: 'Pikaa',
lastname: 'Chu ',
getPokeName: [Function: getPokeName] } */
console.log(logPokemon()); /** { firstname: 'Pikaa',
lastname: 'Chu ',
getPokeName: [Function: getPokeName] }
done */

var pokemonName2 = function(snack, hobby) {
  console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName2.call(pokemon,'Pani puri', 'gives shocking news'); // Pikaa Chu loves Pani puri and gives shocking news
pokemonName2.apply(pokemon,['Pani puri', 'loves spending time with ash ketchum']); // Pikaa Chu loves Pani puri and loves spending time with ash ketchum

this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};

console.log(module.getX()); // 81
console.log(this.x);
var retrieveX = module.getX;
console.log(retrieveX());//undefined
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81