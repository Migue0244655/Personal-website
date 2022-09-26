/*
    Prime Factorization - Have the user enter a number and find
    all Prime Factors (if there are any) and display them.
*/

var getPrimeFactors = function (n) {
    "use strict";

    function isPrime(n) {
        var i;

        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    var i = true, sequence = [], x = 2, y = 1;

    //TODO: Check which numbers are factors of n and also check if
    // that number also happens to be a prime
    while(i == true){
        if(n % x == 0 && isPrime(x)){
            y = y * x;
            sequence.push(x);
        }
        x = x + 1;
        if(y == n){
            i = false;
        }
    }

    return sequence;
};

p = prompt();
// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ] 30030
console.log(getPrimeFactors(p));