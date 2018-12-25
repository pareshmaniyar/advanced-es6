const arr = [11,21,31,41,51,61,72];
const obj = {data: "1", l: "d", x: {y:"1", z: "3c", l: { b: "a", v: false}}}
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
  while(n<6) {
    yield n;
    n= n+2;
  }
}
console.log((getEvenNumber()).next());
// console.log((getEvenNumber()).next().next().value); gives error
console.log((getEvenNumber()).next().value);
console.log((getEvenNumber()).next().value);
console.log("//////////////");

const p = getEvenNumber();
console.log(p.next());
console.log(p.next());
console.log(p.next().done);
console.log(p.next());
console.log(p.next().value);

