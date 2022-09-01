// Listing out all Prime numbers from 0 to num to the console

function countTo(EvenNum) {

    for (let i = 0; i <= EvenNum; i++) {
        if (i % 2 !== 0 || i % 3 !== 0) {
            console.log(i);
        }
    }

}


countTo(52);