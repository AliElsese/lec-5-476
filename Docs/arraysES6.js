const numbers = [1, 2, 3, 4, 5];

// ** Array Methods (Higher Order Functions) ** - functions that accepts function as a parameter like:
// - map: takes an array and return new array with the same length
const squaredNumbers = numbers.map((number) => {
    return number * number
});
console.log(squaredNumbers);    // [1, 4, 9, 16, 25]

// - filter: takes an array and return new array
const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
})
console.log(evenNumbers);       // [2, 4]

// - find: returns first value that accepts the provided function
const foundNumber = numbers.find((number) => {
    return number === 10;
});
console.log(foundNumber);       // undefined
const foundNumber2 = numbers.find((number) => {
    return number === 5;
});
console.log(foundNumber2);      // 5

// - some: returns true if array has at least one element accepts provided function else false
const hasNegative = numbers.some((number) => {
    return number < 0;
});
console.log(hasNegative);       // false
const hasPositive = numbers.some((number) => {
    return number > 0;
});
console.log(hasPositive);       // true

// - every: returns true if array all elements accept provided function else false
const isAllNegative = numbers.every((number) => {
    return number < 0;
});
console.log(isAllNegative);     // false
const isAllPositive = numbers.every((number) => {
    return number > 0;
});
console.log(isAllPositive);     // true

// - reduce: collect array elements into single value (mgmoo3)
const total = numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
});
console.log(total);             // 15
// another syntax:
// const total = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

/////////////////////////////////////////////////////////////////////////////////////////////
const mainArr = [1, 2, 3, 4, 5];
// ** Array Destructing (tfkek)
let [firstIndex, secondIndex] = mainArr;

console.log('first index is: ' + firstIndex + ' second index is: ' + secondIndex);

/////////////////////////////////////////////////////////////////////////////////////////////
// ** Spread operator   (frsh) 
let copyArr = [...mainArr];
console.log(copyArr);
console.log(copyArr[2]);

/////////////////////////////////////////////////////////////////////////////////////////////
// ** Rest operator     (tgmee3 elba2y)
let [x, y, ...restArr] = mainArr;
console.log(restArr);