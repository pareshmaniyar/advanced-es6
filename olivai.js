/*

class B extends class A 
class D extends class B

Object Type Hierarchy  Tree
           Object 
       A           G       
    B     C        H       
    D   E   F    I   J          



PL internal representation of Type Hierarchy

Find the type common of 2 or more objects
// Example:
  I & J = H
  D & E & F = A
  D & I & F = Object
   
Several Use cases:

var x = cond ? D : F;

st1 returns D 
st2 returns F
x --- ? 

x.func1()

// Trying to infer the type of an 
// terinary operator
// if-else if-else statement
// return(s) of a function

// Other use cases 
// Find the common function in hierarchy
// to execute on these two objects, for 
// example +


Object Type Hierarchy  Tree
           Object 
       A           G       
    B     C        H       
    D   E   F    I   J   
*/


const E = { name: "E" };
const F = { name: "F" };
const C = { name: "C", left: E, right: F }

const D = { name: "D" };
const B = { name: "B", left: D };

const A = { name: "A", left: B, right: C };

const I = { name: "I" }; J = { name: "J" };
const H = { name: "H", left: I, right: J };
const G = { name: "G", left: H };

const Obj = { name: "Object", left: A, right: G };
const Root = Obj;

/*
Brute force:
- paths = [];
- store = {}
- result = {}
- loop through the nodes
  - store[node.name] = node;
- traverse(nodes, result, root, [])
nodes = {E: true}
result = {D: [Obj, A, B, D]}
node = "Obj" | "A" | C | E
path = [obj, A, C]

- traverse(nodes, result, node, path)
  - if(node == undefined || Object.keys(nodes).length === 0) return;
  - path.push(node)
  - if(node.name in nodes) {
      result[node.name] = [...path]
      delete nodes[node.name]
    }
  - traverse(nodes, result, root.left, path)
  - traverse(nodes, result, root.right, path)
  - path.pop();

Ex:
[D, E, F]

paths = [[O, A, B, D], [O, A, C, E]]
return A
n * h

minPath = 4

*/
function inferBaseType(classes) {
  const nodes = {};
  for(const node of classes) {
    nodes[node.name] = true;
  }
  const result = {};
  traverse(nodes, result, Obj, []);
  const paths = Object.values(result);
  let minPath = +Infinity;
  for(const path of paths) {
    minPath = Math.min(path.length, minPath);
  }
  let last = minPath - 1;
  let base = paths[0];

  // 1 2 3 4 5 6 7 8 9
  // 1 2 3 4 5 7 9 7 6
  // 1 x y z p k l m n
  // 1 2 3 4 5 7 9 7 6
  // 1 2 3 4 5 7 9 7 6
  for(let i = 1; i < paths.length; i++) {
    const path = paths[i];
    while(base[last].name != path[last].name) {
      last--;
    }
  }
  return base[last];
}

function traverse(nodes, result, node, path) {
  if(node == undefined || Object.keys(nodes).length === 0) return;
  path.push(node)
  if(node.name in nodes) {
    result[node.name] = [...path]
    delete nodes[node.name]
  }
  traverse(nodes, result, node.left, path)
  traverse(nodes, result, node.right, path)
  path.pop();
}

// inferBaseType([D, E]) == A;
// inferBaseType([D, E, F]) == A;
// inferBaseType([A, B]) == A;
console.log(inferBaseType([I, H]).name);
console.log(inferBaseType([I, E]).name);
console.log(inferBaseType([D, B]).name);

/*

Object Type Hierarchy  Tree
           Object 
       A           G       
    B     C        H       
    D   E   F    I   J          

*/