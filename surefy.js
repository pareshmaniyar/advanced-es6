// Given a multi-dimensional array with indefinite nesting, write a function to flatten the elements of the array.
/*
Input: [1, 2, [3]]
Output: [1, 2, 3]

Output: [1, 2, 3, 4, 5]
*/
let Input = [1, 2, [3, [4, 5]]]
let Input2 = [1, 2, [3]]
function flatten(arr) {
    let result = [];
    arr.forEach((item) => {
        if(typeof item === 'object') {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    })
    return result;
}
let res = flatten(Input);
console.log(res);
console.log(flatten(Input2));

// nodes => address => value, next, previous
// 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
// 0 -> 1 -> 2 -> 15 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
// Array vs LinkedList

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.id = uuid();
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertAt(index, value) {
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        let temp = node.next;//3
        let newNode = new Node(value);//15
        node.next = newNode;
        newNode.next = temp;
    }
}

// 2 , 15
// 0 -> 1 -> 2 -> 2 -> 15 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> null
// 0 -> 1 -> 2 -> 2 -> 15 -> 3

// first
// Space
// {
//     "fsd897f8ds79fsd78f9s8d": true,
//     "fksdjfkldskfjlsd899998": true,
// }

// can you print numbers from 1 to 5 with 2 secs of interval between each of them.
// API call
// 1 -> 2 -> 3 -> API

// for(let i = 1; i < 6; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 2000);
// }

// 2 4 
// TODO: async await

var foo = 1;

function bar() {
    foo = 10;
    return;
    function foo() {}
}

bar();
console.log(foo);
