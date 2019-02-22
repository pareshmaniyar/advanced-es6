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
console.log(logPokemon);//[Function: bound pokemonName]
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

