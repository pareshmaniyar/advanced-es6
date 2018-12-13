function* number () {
    for(let i = 0; i<5; i++) {
        console.log(i);
        yield;
    }
}
const y = number();

y.next();
y.next();
y.next();
y.next();

number().next();
number().next();
number().next();
number().next();