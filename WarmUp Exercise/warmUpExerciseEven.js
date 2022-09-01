// Listing out all Even numbers from 0 to num to the console

function countTo(EvenNum) {

    for (let i = 0; i <= EvenNum; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

}


countTo(52);