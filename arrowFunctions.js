//https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-exchangeable
function createObject() {
    console.log('Inside `createObject`:', this.foo);
    return {
      foo: 42,
      bar: function() {
        console.log('Inside `bar`:', this.foo);
      },
    };
  }
  
createObject.call({foo: 21}).bar(); // override `this` inside createObject

// Example using a arrow function
function createObject2() {
    console.log('Inside `createObject2`:', this.foo);
    return {
      foo: 42,
      bar: () => console.log('Inside `bar`:', this.foo),
    };
  }
  
createObject2.call({foo: 21}).bar(); // override `this` inside createObject2

/**
 * In the function expression case, this refers to the object that was created inside the createObject. In the arrow function case, this refers to this of createObject itself.
 */


