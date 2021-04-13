/* Team cool-crabs Ryan Ma Carlos Hernandez
   SoftDev
   K21 -- Get Scripty - learned how to redo factorial + fib
   2021-04-13
*/

// iterative factorial
let factI = (n) => {
    let prod = 1;
    for (let i = 1; i <= n; i++) {
        prod *= i;
    }
    return prod;
}

// recursive factorial
let factR = (n) => {
    if (n === 1 || n == 0) { // three equals means check type and value
        return 1;
    }
    else {
        return factR(n - 1) * n
    }
}

// iterative fibonacci
let fibI = (n) => {
    if (n === 1) {
        return 0;
    }
    let sum = 0;
    let prev = 0;
    let current = 1;
    for (let i = 1; i < n; i++) {
        sum = prev + current;
        prev = current;
        current = sum;
    }
    return sum;
}

// recursive fibonacci
let fibR = (n) => {
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }
    else {
        return fibR(n - 1) + fibR(n - 2);
    }
}