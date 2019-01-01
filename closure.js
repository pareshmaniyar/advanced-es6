console.log("Closure");
/**
 * We know that a function can access variables outside of it; this feature 
 * is used quite often. But what happens when an outer variable changes?
 * Does a function get the most recent value or the one that 
 * existed when the function was created?
 * 
 * what happens when a function travels to another place in the code and 
 * is called from there – does it get access to the outer variables of the 
 * new place?
 */

function makeAdder(x) {
  return function (y) {
    return x + y;
  }
}

const increament = makeAdder(1);
const x = increament(9);
console.log(x);