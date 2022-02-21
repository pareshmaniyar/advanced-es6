process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;


// Question1 : Write a program to print all permutation of a given String.
//  e.g. abc = abc, acb, bac, bca, cab, cba

// Question2: Print bottom view of the binary tree.
/*
Req:
- unique
- keep an array - O(n!)

Approach:
a b c d
| |

Data structure
abcd

a b c d

queue1 = [{soln: "", currentVal: "abcd" }]
- loop currentVal
- solb + currentVal
- push queue
- change currentVal
queue2 = [{soln: "a", currentVal: "bcd"}, {soln: "b", currentVal: "acd"}, {soln: "c", currentVal: "abd"}, .]

N! * N

- curentVal = ""
- loop through abcd - i
    - newVal = Curr + a
    - remainingValue = remove i

Iteratively



*/

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function addNumbers(a, b) {
  return a+b  
}

function perm(str) {
    let queue1 = [{curr: "", remain: str}], queue2 = [];
    const len = str.length;
    for(let i = 0; i < len; i++) {
        while(queue1.length !== 0) {
            let pop = queue1.pop();
            let oldCurr = pop.curr;
            let oldRemain = pop.remain;
            for(let i = 0; i < pop.remain.length; i++) {
                let newCurr = oldCurr + oldRemain[i];
                let newRemain = oldRemain.slice(0, i) + oldRemain.slice(i + 1);
                console.log(oldCurr, oldRemain, newCurr, newRemain);
                queue2.push({curr: newCurr, remain: newRemain });
            }
        }
        queue1 = queue2;
        queue2 = [];
    }
    console.log(JSON.stringify(queue1));
    return queue1;
}

function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());;

    var res = perm("abc");
    console.log("The sum is " + res);
}
