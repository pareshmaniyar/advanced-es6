/*
sum of 2 
Parent(1, 2);

*/
const sum = (a, b) => (a + b);
// const sum = (a, b) => (a - b);
function Parent(prop){
    // console.log();
    let count = 0;
    return function(...args) {
        let count = 9;
        console.log(args, count);
        console.log(prop(...args));
    }
}

function play() {
    // g == undefined
    console.log(g);
    var g = "p";
    a();
    function a() {
        console.log("Hi");
    }
}
play();
Parent(sum)(10, 15);
// r.post("/user", customMiddleware, crtrFunc)

function customMiddleware(req, res, next) {
    try {
        const result = JSON.parse(req.data);
        next();
    } catch(e) {
        res.send("Error!");
    }
}

//////////////////////////////////
function HelloWorld() {
    let x = y = 0;
    x++;
    y++;
    return x;
}

console.log(HelloWorld(), typeof x, typeof y);
// 1, undefined, 1

const p = new Promise((resolve, reject) => {
    reject();
    resolve();
})

p
.then(() => { console.log("resp 1")})
.then(() => { console.log("resp 2")},() => { console.log("resp 2, e2")})
.catch(() => { console.log("error 1")})
.then(() => { console.log("resp 3")})
.catch(() => {console.log("error 2")})

const p1 = new Promise(() => {
    console.log('asfasf');
});

/*
error 1
error 2

resp 1
resp 2
resp 3

- a,b,c => [a,b,c]
Promise.all
Promise.settle
Object


Id, Status
100 records
active - 40
inactive - 40
archive - 20

find({
    status: 'active'
}).length

find({
    status: 'inactive'
}).length

find({
    status: 'archive'
}).length

-------------------
mongodb

db.prodcuts()
PATCH

*/

function  abc() {
    a.then(() => {})
    b.then(() => {})
}

const a = {
    f: "a",
    l: "b"
}
a.l = 'c';



let racer = function() {
    setImmediate(() => console.log("immediate"));
    setTimeout(() => console.log("timeout"), 0);
    process.nextTick(() => console.log("nextTick"));
    console.log("current event loop");
}
 
racer();

let racer1 = function() {
    setTimeout(() => console.log("timeoutp"), 0);
    setImmediate(() => console.log("immediatep"));
    process.nextTick(() => console.log("nextTickp"));
  }
  
  let racer2 = function() {
    process.nextTick(() => console.log("nextTickp"));
    setTimeout(() => console.log("timeoutp"), 0);
    setImmediate(() => console.log("immediatep"));
  }
  
  let racer3 = function() {
    setImmediate(() => console.log("immediatep"));
    process.nextTick(() => console.log("nextTickp"));
    setTimeout(() => console.log("timeoutp"), 0);
  }
  
  racer1()
  racer2()
  racer3()