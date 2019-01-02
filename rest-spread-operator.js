function sumAll(...args) {
  let sum = 0;
  for(arg in args) {
    sum = sum + arg;
  }
  return sum
}
console.log(sumAll(1,2,3));//0012
console.log(sumAll(1,2,3,4,5,6,7,8,9,10));//00123456789

function sumAll2(...args) {
  let sum = 0;
  for(arg in args) {
    sum =+ arg;
  }
  return sum
}
console.log(sumAll2(1,2,3));//2
console.log(sumAll2(1,2,3,4,5,6,7,8,9,10));//9

let arr = [1, 3, 5, 2];
console.log(Math.max(arr));//NaN
console.log(Math.max(...arr));//5
