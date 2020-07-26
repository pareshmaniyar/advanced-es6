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
//slice
//splice

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
