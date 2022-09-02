let name = 'John';

function sayHi() {
    alert('Hi, ' + name);
}

name = 'Pete';

sayHi();

// It is saying Pete because the variable has 'John' assigned to it in the global scope, but then has Pete assigned to name ALSO in the global scope.

