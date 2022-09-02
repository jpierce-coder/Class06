function checkPrime(number) {
    // Check if number is 1 or 0
    if (number === 0 || number === 1) {
        return false
    }

    // Check to see is *number* parameter is a prime number or not
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};

console.log(checkPrime(17));

console.log(checkPrime(7));

console.log(checkPrime(10));