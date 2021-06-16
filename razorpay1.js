// var salary = "1000";

// (function () {
//   console.log("Original salary was " + salary);

//   var salary = "5000";

//   console.log("My New Salary " + salary);
// })();

// var arr = [10, 32, 65, 2];

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }

// i = 4
// queue - {}, {}, {}, {}
// 

/*
The index of this number is: 4
The index of this number is: 4
The index of this number is: 4
The index of this number is: 4
*/


// function outer() {
//   let counter = 0;
//   return function() {
//     return counter++;
//   };
// };
// // [[scope]]

// const generatedFunc = outer();
// const test = outer();
// console.log(generatedFunc()); // 0
// console.log(generatedFunc()); // 1
// console.log(test());// 0
// console.log(test());// 1


// const arr = [2, 3, 4, 5];
// Array.prototype.add = add;

// let finalValue = arr.add(2);

// console.log(finalValue);  // [2, 3, 4, 5] => [4, 5, 6, 7] => [8, 10, 12, 14]
// function add(num) {
//   let arr = this;
//   arr.forEach((item, index) => {
//     arr[index] = item + num;
//   })
//   return arr;
// }


// let num = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
// console.log(num);
// // typeof 'number'
// // array

// // [1, [], 'l', '4']
// function totalIntegers(arr) {
//   let result = 0;
//   const len = arr.length;
//   if(len === 0) return result;
//   for(let i = 0; i < len; i++) {
//     const element = arr[i];
//     if(typeof element === 'number') {
//       result++;
//       continue;
//     }
//     if(Array.isArray(element)) {
//       result += totalIntegers(element);
//     }
//   }
//   return result;
// }

// console.log(chunk(['a', 'b', 'c', 'd'], 2)) // [['a', 'b'], ['c', 'd']]
// console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2)) // [['a', 'b'], ['c', 'd'], ['e']]
// console.log(chunk(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'e', 'b', 'c', 'd', 'a', 'b', 'c', 'd'], 3)) // [['a', 'b', 'c'], ['d']]

// function chunk(arr, chunkSize) {
//   const result = [];
//   let count = 0;
//   const len = arr.length;
//   const noOfChunks = Math.floor(len / chunkSize);
//   for(let i = 0; i < noOfChunks; i++) {
//     result.push(arr.slice(count, count + chunkSize));
//     count = count + chunkSize;
//   }
//   const remainder = len % chunkSize;
//   if(remainder > 0) {
//     result.push(arr.slice(remainder * (-1)));
//   }
//   return result;
// }


const getName = (person) => person.name
const uppercase = (string) => string.toUpperCase()
const reverse = (string) => string.split('').reverse().join('')

console.log(pipe(getName, uppercase, reverse)({ name: 'Prashant' }));
// pipe(1)(2)(3);
/*
pipe
- n functions
- one func returns result which is passed another 
*/

function pipe(props) {
  const operator = arguments;
  return function(obj) {
    for(let i = 0; i < operator.length; i++) {
      let currentFunction = operator[i];
      obj = currentFunction(obj);
    }
    return obj;
  }
}






















