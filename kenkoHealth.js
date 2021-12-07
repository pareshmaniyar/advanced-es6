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
