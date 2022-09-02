function checkPrime(number) {
    // let isPrime = false;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            let isPrime = false;
            console.log(isPrime);
            // break;
        } else {
            let isPrime = true;
            console.log(isPrime);
            // break;
        };
    }
};

checkPrime(7);