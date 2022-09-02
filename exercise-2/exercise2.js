function makeWorker() {
    let name = 'Pete';

    return function() {
        alert(name);
    };
}

let name = 'John';

// create a function
let work = makeWorker();

// call it
work();


/* It showed Pete because the function was hoisted to the top, the name variable was 
declared in the local scope within the function to Pete, but then it was declared BELOW the 
function globally to John. So calling the function will look for the variable WITHIN
the function first, before moving outward to the global scope. */
