/**
 * Implement Array.myReduce
 */

// TestCases :

const testArr = [1,2,3];
// () => () => () =>
Array.prototype.myReduce = function(callback, baseValue) {
    const arr = this;
    let result = baseValue !== undefined ? baseValue : arr[0];
    let i = baseValue !== undefined ? 0 : 1;
    for(; i < arr.length; i++) {
        result = callback(result, arr[i]);
    }
    return result;
}

console.log("\n----Testcase 1--- op : 10---\n")
console.log(testArr.myReduce((acc, curr) => acc + curr, 4)); // 10


console.log("\n----Testcase 2--- op : 6---\n")
console.log(testArr.myReduce((acc, curr) => acc + curr)); // 6
[].myReduce((acc, curr) => acc * curr)

console.log("\n----Testcase 3--- op : 6---\n")
console.log(testArr.myReduce((acc, curr) => acc * curr)) // 6


console.log("\n----Testcase 4--- op : 0---\n")
console.log(testArr.myReduce((acc, curr) => acc * curr, 0)); // 0


-----------------
function curryGen(fn){
    return (function() {
        let result;
        const returnedFunc = function(...args) {
            // args = arr of num / undefined
            if(args.length === 0) {
                let temp = result;
                result = undefined;
                return temp;
            } else {
                if(result === undefined) {
                    result = args.reduce(fn);
                } else {
                    result = args.reduce(fn, result);
                }
                return returnedFunc;
            }
        };
        return returnedFunc
    })();
}

let s = (x, y) => x + y;
const iSum = curryGen(s); 

// console.log(iSum(10, 20)(1000)());
// n * m
console.log(iSum(1)(3)(4)(2)(45)());//55
console.log(iSum(1,3,4)(2)(45)());//55


