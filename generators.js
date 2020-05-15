function* number () {
    for(let i = 0; i<3; i++) {
        console.log(i);
        yield i;
    }
}
const y = number();

console.log(y.next());
console.log(y.next());
console.log(y.next());
console.log(y.next());

// number().next().next().next();Error here!
number().next();
number().next();
number().next();