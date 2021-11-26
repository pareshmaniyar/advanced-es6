/*
Given JSON, modify particular field to some value
get()

Format input
- Standard JSON .json
- txt
- protocol buffer

Inputs
1. JSON
2. Path
3. Value to change

Output
1. Modified JSON, -1
2. error = null, error

1. Read a file
2. Parse it
    2.1 Check for valid JSON
3. Check if value exists
4. Update value
5. return JSON

*/
// import { get } from 'lodash'
const obj = {
    a: "123",
    b: 12, 
    d: { 
        c: [ // prev
            {a:1, b:2},
            {c:4,d:7}// end
        ]
    }
}

// CRUX
function modifyJSON(obj, path, value) {
    // Check if valid path
    const route = path.split('.');
    for(const el of route) {
        // if(el === '') return [-1, "Path invalid"]
        // few character not valid in key
    }
    let end = obj;
    let prev = obj;
    for(const el of route) {
        // if(!(el in end)) return [-1, "Path doesn't exists"];
        // CHECK!!!!! [] in el, el is array, check if el[brac] exists - return -1
        /*
        c[1]
        asdfadfasdf[234]
        - split [, ] - get key, number

        */
        
        prev = end;
        console.log(el);
        if(el.includes('[')) {
            end = getValueFromArray(end, el);
        } else {
            end = end[el];
        }
    }
    const lastKey = route[route.length - 1];
    /*

    */
    if(lastKey.includes('[')) {

    } else {
        prev[lastKey] = value;
    }
    return [obj, null]
}

function getValueFromArray(arr, route) {
    // c[1]
    let [key, num] = route.split('[');
    num.length = num.length - 1;
    num = parseInt(num);
    console.log(arr, num, arr[num]);
    return arr[key][num];
}

const [result, error] = modifyJSON(obj, 'd.c[1].d', 12313);
console.log(JSON.stringify(result), error);
