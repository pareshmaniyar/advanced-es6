var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Type your input ');
rl.prompt();
rl.on('line', function(line) {
  console.log('You have types: ', line);
  process.exit(0);
});
