function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() );
alert( counter() );

alert( counter2() );
alert( counter2() );

/* The counters are independent. The reason being is that each time the counter is
run by counter or counter2, it is runninig the function each time independent of each 
other. The function resets count to 0 WITHIN the function each time it is run. So it 
would alert 0, 1 every time that each of the counters are run */