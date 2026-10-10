let arrNums = [1, 0, 9, 400, 65, 80, 0, 100, 105];

// let newArr = []
// arrNums.forEach((el, index) => {
//     newArr.push(el * el)
// })

let newArr = arrNums.map((el, index) => {
    return el * el
})
console.log(newArr)

let findMethod = arrNums.find((el, index) => {
    return el === 5
})
console.log(findMethod)

let findIndexMethod = arrNums.findIndex((el, index) => {
    return el === 5
})
console.log(findIndexMethod)

// let hasNegative = arrNums.some((el, index) => {
//     return el < 0
// })
// console.log(hasNegative)

// let allPositive = arrNums.every((el, index) => {
//     return el > 0
// })
// console.log(allPositive)

let evenNums = arrNums.filter((el, index) => {
    return el % 2 !== 0
})
console.log(evenNums)