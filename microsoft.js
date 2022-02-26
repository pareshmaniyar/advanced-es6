/*
Question:
BST

Given the root, 3rd largest element in BST
left < root <= right
inorder
left, root, right

myOrder
right, root, left

function getLargest(root, 3) {
    const ref = { val: null, result: 0 }
    recursion(root, ref, 3);
    return ref.val;
}

- recusrion(root, ref, k)
    - if(root === null || ref.val) return
    - recusrion(root.right, ref, k)
    - ref.result++;
    - if(ref.result === k) {
        ref.val = root.val
    }
    - recusrion(root.left, ref, k)

Time - k, n - O(n) - node
Space - O(h)
//////////////////////////////////////////////////

avoid recursion, iteration

while() {
    - root
}

////////////////////////////////////////////////////////
component -> internal state
change state
*/




