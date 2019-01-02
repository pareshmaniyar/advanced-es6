function sumAll(...args) {
  let sum = 0;
  for(arg of args) {
    sum = sum + arg;console.log("aaa: "+arg+ " sum "+ sum);
  }
  return sum
}
console.log(sumAll(1,2,3));//6
console.log(sumAll(1,2,3,4,5,6,7,8,9,10));//55

function sumAll2(...args) {
  let sum = 0;
  for(arg of args) {
    sum =+ arg;console.log("aaa2: "+arg + " sum "+ sum);
  }
  return sum
}
console.log(sumAll2(1,2,3));//2
console.log(sumAll2(1,2,3,4,5,6,7,8,9,10));//9

function sumAll3(...args) {
  let sum = 0;
  for(arg in args) {
    sum = sum + arg;console.log("aaa: "+arg+ " sum "+ sum);
  }
  return sum
}
console.log(sumAll3(1,2,3));//0012
console.log(sumAll3(1,2,3,4,5,6,7,8,9,10));//00123456789

let arr = [1, 3, 5, 2];
let arr2 = [11, 23, 5, 52];

console.log(Math.max(arr));//NaN
console.log(Math.max(...arr));//5
console.log(Math.max(...arr, ...arr2));//52
