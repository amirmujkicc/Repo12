// Only change code below this line
function sumFibonacci(num) {

    var first = 0;
    var second = 1;
    var sum = 0;

    while (second <= num) {
        if (num === 1) {
            sum = 1;
        } else if (second % 2 !== 0) {
            sum += second;
        }
        second += first;
        first = second - first;
    }
    return sum;
}




// Only change code above this line
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;