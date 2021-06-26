

/*
result.push()
- odd
- even
- min length - 2

- loop
- left, right
- odd, even
- valid palin, push

BAQA
i = 2
left = 0, right = 3
3 - 0
*/

function printAllPalindrome(string) {
    const result = [];
    for(let i = 1; i < string.length; i++) {
        let left = i - 1;
        let right = i + 1;
        while(left >= 0 && right < string.length && string[left] === string[right]) {
            left--;
            right++;
        }
        let len = right - left - 1;
        if(len > 1) {
            result.push(string.substring(left + 1, right));
        }
        left = i - 1;
        right = i;
        while(left >= 0 && right < string.length && string[left] === string[right]) {
            left--;
            right++;
        }
        len = right - left - 1;
        if(len > 1) {
            result.push(string.substring(left + 1, right));
        }
    }
    return result;
}

const result = printAllPalindrome("QABCDCBAWPOIUIOPXPOIG");
const result2 = printAllPalindrome("CABAC");
console.log(result);
console.log(result2);


