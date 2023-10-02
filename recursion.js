//SOURCE: https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

//QUESTION ONE: SUM ALL NUMBERS
function sumRange(num) {
    let sum = num;

    if (num != 0) {
        return sumRange(num - 1) + sum;
    } else {
        return sum;
    }
}

console.log(sumRange(1));

//QUESTION TWO: POWER FUNCTION
function power(num, exp) {
    if (exp === 0) {
        return 1;
    } 

    return num * power(num, exp - 1);
}

//QUESTION THREE: CALCULATE FACTORIAL
