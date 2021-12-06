/*
        1
       / \
      2   3
     / \
    4   5
---------------
        1
       / \
      3   2
         / \
        5   4

1.r = 2
1.l = 3

*/

function invertTree(root) { // 1
    if(!root) return null;
    const temp = invertTree(root.right); // 3
    root.right = invertTree(root.left); // 2
    root.left = temp;
    return root;
}

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
const one = new Node(1);
const two = new Node(2);
const one = new Node(3);
const one = new Node(4);
const one = new Node(5);

///////////////////////////////////
/*

Cart system

Req:
- Add products -> id, quantity - POST
- Remove cart - DELETE
- Change the quantity -> change total - PATCH
- Get the list cart items - GET
- Get Total amount of items in the cart - UI can handle

NOSQL

- id: user_id
- products: [{
    title: 'Iphone',
    amount: 1,00,000
}]
- meta data

*/

