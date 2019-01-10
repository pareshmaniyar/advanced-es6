let arr = [1,2,3], obj = {a: true, b: "krissh"};
if(arr instanceof Array) console.log("Array1");
if(obj instanceof Array) {
  console.log("Array2")
} else {
  console.log("Not Array")
};
if(arr instanceof Object) console.log("Object1");
if(obj instanceof Object) console.log("Object2");

console.log(arr.constructor);
console.log(arr.length);
console.log();
arr.prototype.print = function() {
  console.log('In print method in prototype');
}
arr.print();
arr.concat(['concated content']);
console.log('after concat: ', arr);

/** */
arr.copyWithin();
arr.entries();
/** */
arr = [1,2,3];
arr.every(function(x){
  return x>2;
});

arr.fill();

let filterOutput = arr.filter(x => {if(x>1) return true});
console.log(filterOutput);

arr.find();
let findIndexOutput = arr.findIndex(x=> {if(x>1) return true});
console.log(findIndexOutput);

arr.forEach((x,index) => {
  if(x%2 === 0) {
    arr[index] = x+1; 
  }
}); 

arr.from('',x=>x+1);
console.log(arr.includes(2));
console.log(arr.indexOf(2));
arr.isArray();
let joinOutput = arr.join();
console.log(joinOutput);

console.log(arr.keys.next());
arr.lastIndexOf();
let mapOutput = arr.map(x=>x+11);
console.log(mapOutput);
console.log(arr);
arr.pop();
console.log('after pop: ',arr);
arr.push(4);
console.log('after push: ',arr);
let reduceOutput = arr.reduce(x => x, 9);
let reduceRightOutput = arr.reduceRight((t,x) => t+x, 9);
console.log(arr);
arr.reverse();
console.log('After reverse', arr);
console.log('after shift', arr.shift);
arr.some();
arr.sort();
arr.splice();
arr.toString();
arr.unshift();
arr.valueOf();

