Chat application
MVP

Req:
1. just text messaging
2. only 1-1

Scale:
10 million

Devices support:
Android - java, react native, ionic
IOS - swift
WebApp - React Native, Vue
Native

Server

----------------------------------------
find all the pairs in an array with a given sum
arr = [1,2,3,4]
sum = 5
[1,4], [2,3]
'1-4': true
'2-3': true
[1,4,4,1] 5
[1,4]
[1,4], [4,1]
[1,1,1,1]
'1-1': true
data = {}
result = {}
- loop through
    - sum - i is in data, then result in ascending
    - add i in data
[1,4,4,1] 5
1, 4, 4, 1
[1,4]
function printPairs(arr, sum) {
    const data = {};
    for(const el of arr) {
        const diff = sum - el;
        if((diff) in data) {
            if(el in data) continue;
            console.log([el, diff]);
        }
        data[el] = true;
    }
}

