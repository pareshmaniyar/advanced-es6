function fn() {
    console.log(this.length);
}

obj = {
    length: 5,
    x: function (fn) {
        fn();
    }
}
    
obj.x(fn);

for(let i = 0; i<=10;i++){
    setTimeout(() => console.log(i))
}

for(var i = 0; i<=10;i++){
    setTimeout(() => console.log(i))
}
console.log(i+ "//");
for(let i = 0; i<=10;i++){
    setTimeout(() => console.log(i))
}

let arr = [13, 75, 5, 37, 28]
let max = -1;
let secondMax = -1;
for(let i = 0; i<=10 ; i++) {

    
    if(arr[i] > max){
        max = arr[i];
    } else if(arr[i] > secondMax){
        secondMax = arr[i];
    }
    
}
console.log(secondMax + "asd");