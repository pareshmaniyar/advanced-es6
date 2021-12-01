function fibonacci(n) {
    if(n === 0 || n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(6);
/*
      6 n
    5    4 n - 1 n - 2
4     3  3  2

3 - 2, 1
4 - 3, 2
stack
props

heap
{}

*/
let i = 9;
function xyz() {
    let j = 3;
    let bcd = false;
    parent(bcd);
}

function parent(bcd) {
    let i = 0;
    return function() {
        console.log(i);
    }
}

const child = parent();
child();
// -------------------
function g(){
    console.log(j);
    abc();
    var j = 0;
    function abc(){
        console.log("asf");
    }
}

