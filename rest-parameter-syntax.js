/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

/* Allows us to handle the contents of arrays of multiple lengths. By using the ... 
*three dots rest parameter */

// Regular function call 

const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log(sum);

// Extra arguments are ignored

let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2:", sum2);

// Function using ...rest

sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;    
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);

console.log("Sum3:", sum3);