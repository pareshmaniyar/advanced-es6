//callback example
timeConsumingScript = (callback) => {
    console.log('f2 Takes time');
    setTimeout(()=>{callback(), 100});
}
(function f1 () {
    console.log("In f1");
})();
(function f2 () {
    console.log("f2 starts");
    timeConsumingScript( () => {
        console.log("in callback");
    });
    console.log("f2 ends");
})();
(function f3 () {
    console.log("In f3");
})();

