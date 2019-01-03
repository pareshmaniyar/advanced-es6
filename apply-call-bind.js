// for reference
var pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function() {
      var fullname = this.firstname + ' ' + this.lastname;
      return fullname;
  }
};

var pokemonName = function() {
  console.log(this.getPokeName() + 'I choose you!');
};
pokemon.firstname = 'Pikaa';
var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
console.log(logPokemon);
logPokemon(); // 'Pika Chu I choose you!'
pokemon.firstname = 'Jika';
//When we use the bind() method:
//the JS engine is creating a new pokemonName instance and binding pokemon as its this variable. It is important to understand that it copies the pokemonName function.
//After creating a copy of the pokemonName function it is able to call logPokemon(), although it wasn’t on the pokemon object initially. It will now recognizes its properties (Pika and Chu) and its methods.
var pokemonName2 = function(snack, hobby) {
  console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName2.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName2.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms

str = 'abcdefg';
revStr = str.split('').reverse().join("");
console.log(revStr);
