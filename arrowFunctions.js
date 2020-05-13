//https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-exchangeable
let foo = 84;
function createObject() {
    console.log('Inside `createObject`:', this.foo);
    return {
      foo: 42,
      bar: function() {
        console.log('Inside `bar`:', this.foo);
      },
    };
  }
console.log("Creating object now..")
let a = createObject();
console.log("executing created object now..")
a.bar();
createObject.call({foo: 21}).bar(); // override `this` inside createObject

// Example using a arrow function
function createObject2() {
    console.log('Inside `createObject2`:', this.foo);
    return {
      foo: 42,
      bar: () => console.log('Inside `bar`:', this.foo),
    };
  }
let b = createObject2();
console.log("Creating object now..")
b.bar();
console.log("executing created object now..")
createObject2.call({foo: 21}).bar(); // override `this` inside createObject2

/**
 * In the function expression case, this refers to the object that was created inside the createObject. In the arrow function case, this refers to this of createObject itself.
 */


// currently common pattern
getData = function(func) {
  return func;
}
var that = this;
getData(function(data) {
  that.data = data;
});

// better alternative with arrow functions
getData(data => {
  this.data = data;
});

//It is not possible to set an arrow function's this with .bind or .call