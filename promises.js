console.log("Before initiating promise");
let promise = new Promise(function(resolve, reject) {
  console.log("Entered Promise");
  setTimeout(() => resolve({data: "007", name: "Bond"}), 1000);
  console.log("Below Resolve");
});
console.log("Before calling promise.then");
promise.then(
  (data) => {
    console.log("After Promises in .Then of resolve");
    console.log(JSON.stringify(data));
  },
  (rejectError) => {
    console.log("Hope this wont be called "+ JSON.stringify(rejectError));
  }
);
console.log("After calling promise///////////////////////////");
//Reject error throwing
console.log("Before initiating promise");
let promise2 = new Promise(function(resolve, reject) {
  console.log("Entered Promise");
  setTimeout(() => reject(new Error("I am Batman")), 1000);
  console.log("Below Resolve");
});
console.log("Before calling promise.then");
promise2.then(
  (data) => {
    console.log("resolve not called");
    console.log(JSON.stringify(data));
  },
  (rejectError) => {
    console.log("Hope this will be called "+ rejectError);
  }
);
console.log("After calling promise");
