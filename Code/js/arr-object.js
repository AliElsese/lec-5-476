let arr = [1, 2, 3]
// let num1 = arr[0]
// let num2 = arr[1]
// let num3 = arr[2]

// Destructing (tfkeek)
let [num1, num2, num3] = arr;
console.log(num1)

// Spreed Operator
let copy = [...arr, 4]
console.log(copy)

// Rest Operator
let [num6, num7, ...restArr] = arr;
console.log(restArr);


let user = {
    name: "ali",
    age: 30,
    jobTitle: "front end"
}
// let name = user.name
// let age = user.age
// let jobTitle = user.jobTitle

// Destructing (tfkeek)
// let { name, age, jobTitle } = user;
// console.log(name)

// Spreed Operator
let user1 = { ...user, email: "ali@ali.com" }
console.log(user1)

// Rest Operator
let { name, ...restUser } = user;
console.log(restUser)