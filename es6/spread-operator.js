/**
 * The spread operator (...)
 */

// With string
const username = "somkiat";
const temp = [...username];

console.log(username);
console.log(temp);

// With array
const users = ["hello", "world", "node"];
console.log(users);
console.log(...users);

// Function arguments
const numbers = [1, 2, 3, 4, 5];

console.log(Math.max(numbers)); // NaN
console.log(Math.max(...numbers));

// Array
const first = [1, 2, 3];
const second = [100, 200, 300];
const result1 = [first, second, 11, 12, 13];
const result2 = [...first, ...second, 11, 12, 13];

console.log(result1);
console.log(result2);

// Object
const data1 = { id: 1, firstname: "somkiat" };
const data2 = { age: 30 };
const result3 = { data1, data2 };
const result4 = { ...data1, ...data2 };

console.log(result3);
console.log(result4);
