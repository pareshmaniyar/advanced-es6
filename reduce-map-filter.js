str = 'abcdefg';
revArray = str.split('');
console.log(revArray);
let newArray = ['a'];
console.log(newArray);
newArray = revArray.map(x => {//one to one mapping, it has to return something
  if(x != 'a') {
    return x
  } else {
    return ;//undefined
  }
});
console.log(newArray);

let arr = [1,2,3,4,5,6,7,8,9,10];
let total10 = arr.reduce((total, x) => x+total, 10);///////////////
console.log(total10);

let greaterThanFiveArray = arr.filter(x => {//very tricky, if returns true
  if(x>5) return x+1;// pushes only the val
});
console.log(greaterThanFiveArray);
console.log('Before forEach: ', arr);
arr.forEach((value, index) => {
  if(value%2 !== 0) arr[index] = value*2;
});
console.log('After forEach: ', arr);