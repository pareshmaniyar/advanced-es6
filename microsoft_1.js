"use strict";
/*
HEY!!!!! Power cut at home!
Question:
       12
      /  \
     6   19
    / \    
   3   9   

      31
     /  \
    46  19
   /  \
  49  40

Right,val,left

arr = []
ref = { val: 31 }
recursion(root, ref) // 12 
    - root == null return 
    - recursion root.right // 
    - val = val + ref.val // 31
    - ref.val = ref.val + val; // 19 + 12
    - recursion root.left
       12
      /  \
     6   19
    / \    
   3   9 

*/
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function traversal(root, ref) { // 12 | 6 | 3
    if(root === null) return;
    traversal(root.right, ref); // 9
    root.val += ref.val; // 19 + 12 + 9 + 6 + 3
    ref.val = root.val;
    traversal(root.left, ref); //
}

let ref = { val: 0 };
let n19 = new Node(19);
let n12 = new Node(12);
let n6 = new Node(6);
let n9 = new Node(9);
let n3 = new Node(3);
n12.left = n6;
n12.right = n19;
n6.left = n3;
n6.right = n9;
print(n12);
console.log("This is a debug message");
traversal(n12, ref);
console.log("This is a debug message");
print(n12);
function print(root) {
    if(root === null) return;
    print(root.left);
    console.log(root.val);
    print(root.right);
}
/////////////////////////////////////////////////////////////////
/*
BF:
arr = []

   10
 /    \

First soln: heap - close to BF
Second soln:
    - arr of n: nlogn * k -> heap -> logn * k
    - space - arr[n]
*/
let arr = [];
let heap = new Heap();

function kthSmallestEl(mat, n) {
    let heap = new Heap();
    for(let i = 0; i < n; i++) {
        heap.insert({ row: i, col: 0, val: mat[i][0]});
    }
    for(let j = 0; j < k - 1; j++) {
        let pop = heap.extract();
        // Hey, power cut at home, can you allow me inside teams
        if(col < n) {
            heap.insert({ row: pop.row, col: pop.col + 1, val: mat[pop.row][pop.col + 1]});
        }
    }
    return heap.extract().val;
}







