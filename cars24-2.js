// var myName = "asd";
// var obj = {
//     myName: 'fsdf',
//     getName: () => console.log(this.myName)
// }
// obj.getName();

String.prototype.getLength = function() {
    console.log(this.length);
}
"fsdf".getLength();
// closure -> environment
var obj = {
    x: { y: 2, z: {x: 3}},
    y: {
        y: 5
    }
}
let newObj = JSON.parse(JSON.stringify(obj));
let newObj2 = Object.assign({}, obj);
newObj3 = {...obj};
function clone(obj){
    let res = {};
    Object.keys(obj).forEach((item) => {
        if(typeof obj[item] === 'object') {
            res[item] = clone(obj[item]);
        } else {
            res[item] = obj[item];
        }
    });
    return res;
}
let o = clone(obj);
console.log(o);
obj.y.y = "not change";
console.log(o.y.y);
console.log(obj.y.y);

function utility(){
    let arr = [p1, p2, p3];
    let arr2 = [p4];
    return new Promise((resolve, reject) => {
        Promise.all(arr).then(res => {
            resolve(p4(res));
        });
    });
}

utility.then(res => console.log(res));
