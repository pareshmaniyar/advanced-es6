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
console.log("pokemon1: ",pokemon);
var logPokemon = changePokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
console.log("pokemon2: ",pokemon);
console.log(logPokemon);//[Function: bound ChangePokemonName]
console.log("pokemon3: ",pokemon);
logPokemon(); //same as below
console.log("pokemon4: ",pokemon);
console.log(logPokemon()); /** { firstname: 'Pikaa',
lastname: 'Chu ',
getPokeName: [Function: getPokeName] }
done */
var pokemonName2 = function(snack, hobby) {
  console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName2.call(pokemon,'Pani puri', 'gives shocking news'); // Pikaa Chu loves Pani puri and gives shocking news
pokemonName2.apply(pokemon,['Pani puri', 'loves spending time with ash ketchup']); // Pikaa Chu loves Pani puri and loves spending time with ash ketchum
let pokemonName2Bind = pokemonName2.bind(pokemon);
pokemonName2Bind('Pav Bhaji', 'gives lightning news');
this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};

console.log(module.getX()); // 81
console.log("this.x: ",this.x);

var module2 = {
  x: 81,
  getX: () => { return this.x; }
};

console.log(module2.getX()); // 81
console.log("this.x: ",this.x);

var retrieveX = module.getX;
console.log(retrieveX());//undefined
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
module2.x = 12;
retrieveX.call(module);//undefined
console.log(boundGetX()); // 81

