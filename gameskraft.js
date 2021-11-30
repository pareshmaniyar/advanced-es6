const name = "outside function";
function sayHello(name){
    console.log(name);
    return function(guest) {
        console.log(`Hey ${guest}! I am ${name} `)
    }
}

const wishing = sayHello("Paresh");
wishing('Swatantra');
wishing('Maa');
/*
heap

stack

*/
