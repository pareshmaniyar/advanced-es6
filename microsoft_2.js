"use strict";
/* 
a, cat, bat, tree
acat
trees
Store: {
    word: true
}
result = []
str = acat
recursion(str, result, store)
    - return false;

*/

function determine(wordsList, str) {
    let result = [];
    let store = {};
    for(const word of wordsList) {
        store[word] = true;
    }
    console.log(store);
    return traverse(str, result, store) ? result : null;
}

/*

cat,bat,tree, ca - k
catbat - n
n * n



c c c c c
cccccccc - n * 

[]

*/


function traverse(str, result, store) { // catbat | bat
    if(str in store) {
        result.push(str);
        return true;
    }
    for(let i = 0; i < str.length; i++) {
        let el = str.slice(0, i + 1); // cat
        if(el in store) { // 
            result.push(el);
            if(traverse(str.slice(i + 1), result, store)) { // 
                return true;
            }
            result.pop();
        }
    }
    return false;
}

function traverse(str, result, finalResult, store) { // catbat | bat
    if(str in store) {
        result.push(str);
        finalResult.push(result);
        return;
    }
    for(let i = 0; i < str.length; i++) {
        let el = str.slice(0, i + 1); // cat
        if(el in store) { // 
            result.push(el);
            traverse(str.slice(i + 1), result, finalResult, store);
            result.pop();
        }
    }
}
console.log(determine(['cat', 'bat', 'tree', 'ca'], 'catbat'));

"use strict";
/*

- find deepest nodes
    - find max depth
        - traverse to find max deepth
    - arr of deepest nodes
        - traverse to add node to result
==> arr of deepest nodes
==> arr of arr (path from root to that node)
O(n), O(n * n) - number of nodes

*/
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
n1.left = n2;
n1.right = n3;
console.log(deepestLCA(n1));
function deepestLCA(root) {
    if(root === null) return null;
    // find max depth
    let maxDepth = depth(root);
    // arr of paths
    let finalResult = [];
    findPaths(root, 1, maxDepth, [], finalResult);
    // return result
    let i = 0;
    let prev = null;
    while(i < maxDepth) {
        let parent = finalResult[0][i];
        for(let j = 0; j < finalResult.length; j++) {
            if(parent !== finalResult[j][i]) return prev;
        }
        prev = parent;
        i++;
    }
}

function depth(root, ref) {
    if(root === null) return 0;
    return 1 + Math.max(depth(root.left), depth(root.right, ref));
}

/*
    1
   / \
  2   3
result = [1,2,5]
finalResult = [[1,2,4,6], [1,2,5,7], [1,2,5,8]]

*/
function findPaths(root, level, maxDepth, result, finalResult) {
    if(root === null) return;
    if(level === maxDepth) {
        finalResult.push([...result, root.val]);
        return;
    }
    result.push(root.val);
    findPaths(root.left, level + 1, maxDepth, result, finalResult);
    findPaths(root.right, level + 1, maxDepth, result, finalResult);
    result.pop();
}
