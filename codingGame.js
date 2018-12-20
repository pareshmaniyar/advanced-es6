/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const input2 = "paxyzbxyzcp";
var input = input2;
// var input = input2;
// // Write an action using print()
// // To debug: printErr('Debug messages...');
remove = (input, i, n) => {
    part1 = input.substring(0,i);
    part2 = input.substring(i+1+n, input.length)
    return part1+part2
}
let n=1;var f = false;
getAwesomeness = (input) => {
  for(let i=0; i<input.length; i++) {
      if(i+1 < input.length && input[i].charCodeAt(0) + 1 === input[i+1].charCodeAt(0)){
        let j = i;
        while(true) {
              if(j+2 < input.length && input[j+1].charCodeAt(0) + 1 === input[j+2].charCodeAt(0)) {
                  n = n + 1; j = j + 1;
              } else {
                  break;
              }
          }
          input = remove(input, i, n); n = 1; f = false;
      }
  }
  return input
}
while(!f) {
  f = true;
  input = getAwesomeness(input);
}

console.log(input);