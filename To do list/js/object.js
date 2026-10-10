// non primitive
// let objectName = { property: value, property: value }
let user = {
    name: "ali",
    age: 30,
    address: "tanta"
}

// Destructing
let { name } = user;
console.log(name);

// Spreed Operator
let copy = { ...user, jobTitle: "front end" };
console.log(copy);

// Rest Operator
let { address, ...restUser } = user;
console.log(restUser);

// Arrays
const arr = ["task 1", "task 2", "task 3"];

// Destructing
let [taskOne] = arr;
console.log(taskOne);

// Spreed Operator
let copyArr = [...arr, "task 4"];
console.log(copyArr);

// Rest Operator
let [taskTwo, ...restArr] = arr;
console.log(restArr);