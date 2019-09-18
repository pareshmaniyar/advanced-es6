//dynamic => Changes types once defined
let str;
console.log("Typeof", typeof str, `of ${str}`);
str = "string"
console.log("Typeof", typeof str, `of ${str}`);
str = 123;// 64 bit
console.log("Typeof", typeof str, `of ${str}`);
str = true;
console.log("Typeof", typeof str, `of ${str}`);
str = 123.123123;
console.log("Typeof", typeof str, `of ${str}`);
str = null;
console.log("Typeof", typeof str, `of ${str}`);

// 1. Additional Miscellaneous stuff
let n = 123;
n = 1.1223;
console.log("Typeof", typeof n);
console.log("Typeof", 1/0);
console.log("Typeof", -1/0);
console.log("Typeof", "d"/2);
let k;
console.log("Typeof", k);
let Null = null;
console.log("Typeof", typeof Null);
function d(){
    console.log("In function");
}
console.log("Typeof", typeof d);
//string cmp
if("a">"b"){
    console.log("a > b");
} else {
    console.log("a < b");
}
if("0"){
    console.log("\"0\" is true");
} else {
    console.log("\"0\" is false");
}
console.log("2 ** 3 = 2^3 = ", 2 ** 3);
