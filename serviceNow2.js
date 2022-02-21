/*

arr = [1, 3, 6, 10, 15]

- recursion (arr) // [1, 3, 6, 10, 15] | [1, 3] | [3]
    - arr length == 0 return null
    - let mid = arr.length / 2; // 2 | 0
    - root = new Node(arr[mid]); // 6 | 1
    - root.left = recursion(arr.slice(0, mid)); // [1, 3] | []
    - root.right = recursion(arr.slice(mid + 1)); // [10, 15] | [3]
    - return root

*/

/*

big string
max substring without any repeating characters

- Two pointer
- window
- storing map
    - last occured
bacabcdaa => abcd
    l  r

*/

function maxSubtring(str) {
    let l = 0, r = 0;
    let store = {};
    let max = "";
    while(r < str.length && l < str.length) { // "bcda"
        let el = str[r];
        if(store[el]) {
            while(l < str.length && str[l] !== el) {
                store[str[l]] = false;
                l++;
            }
            l++;
        }
        store[el] = true;
        //calc
        if(r - l + 1 > max.length) {
            max = str.slice(l, r + 1);
        }
        r++;
    }
    return max;
}

/*

abc -> '', a, b, c, ab, bc, ac, abc

['',  a, b, c,  ab, bc, ac]
 abc  bc ac ab   c  a  
abcdefgh
|    |

abc
"" | a | ab | abc | ac | b | bc | c
0
0,1,2

- resursion start = 0, end = str.length, initial = "", store | a
- start < end return;
- store.push(initial); // 
- from i = start to end
    - recursion i + 1, end, initial + str[i], store

*/
let store = [];
let str = "abcd";
recursion("", 0, str.length, str, store);
console.log(store);
function recursion(val, start, end, str, store) { // "" | a | ab | 
    store.push(val);// ["", a, ab]
    if(start >= end) return;
    for(let i = start; i < end; i++) {
        recursion(val + str[i], i + 1, end, str, store);
    }
}


