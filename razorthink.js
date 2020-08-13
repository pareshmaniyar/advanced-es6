let arr1 = [1, 2, 3, 4];
function shift(n, arr) {
    let result = [];
    // brute 
    // n to arr.length
    //from 0 to arr.length
    // smartFunction(n + i) return mod arr.length % n
    for(let i = n; i < arr.length; i++) {
        result.push(arr[i]);
    }
    for(let i = 0; i < n; i++) {
        result.push(arr[i]);
    }
    return result;
}


let res = shift(6, arr1);
console.log(res);

function shift2(n, arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(arr[smartValue(n + i, arr.length)]);
    }
    return result;
}
function smartValue(a, len) {
    return a % len;
}
res = shift2(6, arr1);
[1, 2, 3];
// res = arr1.slice(n, arr1.length).concat(arr1.slice(0, n));
// slice
// splice

console.log(res);

function pattern(n){
    for(var i = 0; i <= n; i++) {
        let str = "";
        for(var j = 0; j < n - i; j++) {
            str = str + " ";
        }
        for(var j = 0; j < i; j++) {
            str = str + "%" + " ";
        }
        console.log(str);
    }
}
pattern(7);

let arr = [];
for(let i = 0; i < 100; i++) {
    arr.push([Math.random(),Math.random()]);
}
console.log(arr);
let lessThanHalf = arr.filter((item) => {
    if(item[0] < 0.5 && item[1] < 0.5) {
        return true;
    }
    return false;
})
lessThanHalf = arr.filter((item) => item[0] < 0.5 && item[1] < 0.5)
// inheritance

res = arr.reduce((total, item) => {
    return [total[0] + item[0], total[1] + item[1]];
}, [0, 0])
res = [res[0]/100, res[1]/100];
console.log(res); //centroid

function exponential(a, b) {
    return Math.pow(a, b);
}

function memoize(fun){
    let cache = {};
    
    return function(...args) {
        console.log(args);
        let key = args.join(":");
        if(key in cache) return cache[key];
        let result = fun(...args);
        cache[key] = result;
        return result;
    };
}
let smartFunction = memoize(exponential);
console.log(smartFunction(2, 3));
console.log(smartFunction(2, 5));
console.log(smartFunction(2, 3));
