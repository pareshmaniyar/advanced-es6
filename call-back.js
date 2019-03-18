//callback example
timeConsumingScript = (callback) => {
    console.log('f2 Takes time');
    setTimeout(()=>{callback("in callback"), 50});
}
(function f1 () {
    console.log("In f1");
//    console.log(this); weird stuff here, scope
})();
(function f2 () {
    console.log("f2 starts");
    timeConsumingScript( (msg) => {
        console.log("MSG: ", msg);
    });
    console.log("f2 ends");
})();
(function f3 () {
    console.log("In f3");
})();

console.log("call-back hell");

(function first(){
    console.log("in first");
    setTimeout( function second(){
        console.log("in second");
        setTimeout( function third(){
            console.log("in third");
            setTimeout( function fourth(){
                console.log("in fourth");
                setTimeout( function fifth(){
                    console.log("in fifth");
                    console.log("pyramid structure. Very hard to understand");
                }, 100);
            }, 100);
        }, 100);
    }, 100);
})();
