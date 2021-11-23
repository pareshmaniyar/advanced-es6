function printStar() {
    let inc = true;
    let count = 1;
    for(let j = 0; j < 6; j++) {
        let str = '';
        for(let k = 0; k < count; k++) {
            str += '*';
        }
        console.log(str);
        if(inc) {
            count++;
        } else {
            count--;
        }
        if(count === 5) {
            inc = false;
        }
    }
}
printStar();
/*

*

*
*

*
**
*

*
**
***
**
*

*
**
***
****
*****
****


*/