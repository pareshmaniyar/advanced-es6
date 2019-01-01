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

const increment = makeAdder(1);
const x = increment(9);
console.log(x);

var counter = (function() {
  let _private_count = 0;
  function inc(x) {
    _private_count = _private_count + x;
  }
  return {
    incOne: () => {
      inc(1);
    },
    decOne: () => {
      inc(-1);
    },
    value: () => _private_count
  }
})();

console.log(counter.value());
counter.incOne();
counter.incOne();
console.log(counter.value());
counter.decOne();
console.log(counter.value());
