this.name = "Rajender";
let obj = {
    name: "Paresh",
    getName: function () {
      console.log(this.name);
    },
    getName2: () => {
      console.log(this.name);
    }
}

function appendMr() {
    console.log("Mr", this.name);
}
// appendMr.bind(this, obj);
// appendMr.apply(obj);
// appendMr();
// obj.getName();
let func = appendMr.bind(obj);
func();
obj.getName();
obj.getName2();
const arr = ['a', 1, 2, 5, 8, 6, 'b', '3'];
function sumOfOdd(arr) {
    return arr.reduce(function(res, item) {
        if(parseInt(item) != NaN && parseInt(item)%2) {
            return res + parseInt(item);
        }
        return res;
    }, 0);
}
console.log(sumOfOdd(arr));
//output = 9

let b = JSON.parse(JSON.stringify(arr));
// Problem with function
// "", 12, {}, [], true
let c = [...a];

