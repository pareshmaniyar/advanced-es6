/*

org - a1, a2, a3, a4
vendors - v1, v2, v3
products - p1, p2, p3
orders
ax -> vy -> pz

QA

- Tables
Orders
1. orderId
2. productId
3. vendorId
4. customerId/organizationId
5. quantity
6. orgStatus: [{
    1. status
    2. reason
    3. adminId
}]
7. currentStatus

Not needed in SQL
StateTable
stateId
orderId
adminId
status
reason





*/



const input1 = "abcde xyz pq";
const output = "edcba zyx qp";

function convertion(s) {
    const arr = s.split(' ');
    let result = '';
    for(let str of arr) {
        result += str.split('').reverse().join('');
        result += ' ';
    }
    result = result.trim();
    return result;
}
function convertion2(s) {
    let result = '';
    let stack = [];
    s += ' ';
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            while(stack.length != 0) {
                result += stack.pop();
            }
            result += ' ';
        } else {
            stack.push(s[i]);
        }
    }
    return result.trim();
}
console.log(output === convertion2(input1));

/*

- Given an arr, k. return largest 
[1,2,3]
[1.11, 5.84, 4.89, 3.03, 7.09], 3
[5.84, 4.89, 7.09]
[1,2,1,2,2]

New approach
BF:
- n*k
- n*logn
[5,4,1,2,3]
- storing indexes
1. sorting - []
2. sorting based on index

- arr = sorted, int
- k < arr.length
[4,5,1,2,3] , 3
[4,5,3]

n*k
     3
    / \
   5   
[3,5,4]
- get max k

function Node (val, index){
  this.val = val;
  this.index = index;
}

BF:
nlogk + klogk
heap - min
- loop through O(n)
  - adding each heap - O(k)
  - heap size > k, last element

O(1)

MongoDB
- Students
- Groups - subscribe

- On event push notification to group
- pass Data to Notification service

1 - student has groupID
student -> 






2 - groups has arr of studentID
event -> groupdID -> arr students



groups - 50
student - 5 million
1 group - 50 million


case 1
1 

2 


case 2



/////
API - 
- t data points
- x data points in collection a
- t - x data points in collection b

x subset of t

first a, then b
API
caching id - 10 million

- if put x in a


A + B

mongoose.populate 







*/

function largestKArr(arr, k) {
    const map = {};
    for(let i = 0; i < arr.length; i++) {
      map[arr[i]] = i;
    }
    arr.sort((a, b) => {});
    let result = new Array(k);
    return result;
  }
  
  