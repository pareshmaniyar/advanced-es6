// https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-exchangeable

// Constructor function

function User(name) {
  this.name = name;
}

// vs

const User = name => {
  this.name = name;
};

// Prototype methods

User.prototype.getName = function() {
  return this.name;
};

// vs

User.prototype.getName = () => this.name;
// Object (literal) methods

const obj = {
  getName: function() {
    // ...
  }
};

// vs

const obj = {
  getName: () => {
    // ...
  }
};
// Callbacks

setTimeout(function() {
  // ...
}, 500);

// vs

setTimeout(() => {
  // ...
}, 500);
// Variadic functions
/**
 * But: If the code which calls the callback explicitly sets this to a specific value, as is often the case with event handlers, especially with jQuery, and the callback uses this (or arguments), you cannot use an arrow function!
 */
function sum() {
  let args = [].slice.call(arguments);
  // ...
}

// vs
const sum = (...args) => {
  // ...
};