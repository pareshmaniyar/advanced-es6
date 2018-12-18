const arr = [1,2,3,4,5,6];
const obj = {data: "1", value: "d", x: {y:"1", z: "3c"}}
for(i of arr) {
  console.log(i);
}
//confused with
for(i in arr) {
  console.log(i);
}
//below code not iterable
// for(i of obj) {
//   console.log(i);
// }
for(i in obj) {
  console.log(i);
}
let n=2;
function* getEvenNumber() {
  while(true) {
    yield n;
    n= n+2;
  }
}
console.log((getEvenNumber()).next());
//console.log((getEvenNumber()).next().next().value); gives error
console.log((getEvenNumber()).next().value);
console.log((getEvenNumber()).next().value);
console.log("//////////////");

const p = getEvenNumber();
console.log(p.next());
console.log(p.next().value);
console.log(p.next().value);
console.log(p.next().value);
console.log(p.next().value);

