// ** Math Object Methods **
// - random: returns a floating-point number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());

// - round: returns the nearest integer
console.log(Math.round(2.6));   // output: 3
console.log(Math.round(2.4));   // output: 2

// - ceil: returns the value of number rounded up to its nearest integer
console.log(Math.ceil(2.6));    // output: 3
console.log(Math.ceil(2.4));    // output: 3

// - floor: returns the value of number rounded down to its nearest integer
console.log(Math.floor(2.6));   // output: 3
console.log(Math.floor(2.4));   // output: 3

// - sign: returns if number is negative, null or positive
console.log(Math.sign(3));     // output: 1
console.log(Math.sign(-3));    // output: -1
console.log(Math.sign(0));     // output: 0

// - pow: returns the value of first number to the power of second number
console.log(Math.pow(2, 3));    // output: 8

// - sqrt: returns the square root of x
console.log(Math.sqrt(4));      // output: 2


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10)); // رقم بين 1 و10
console.log(getRandomInt(50, 100)); // رقم بين 50 و100