/**
 * Destructuring operator
 * Making a copy of individual items from an object or an array and assigning them to a variable
 *
 * It is important to note that destructuring does not remove properties or values from the original object or array.
 * It merely copies it.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

// Swap
let a = 1;
let b = 2;
[b, a] = [a, b];
console.log(a, b);

// Arrays
const numbers = [1, 2, 3];
const [first, , third] = numbers;
console.log(first, third);

// Object
const user = {
  id: 1,
  name: "somkiat",
  age: 30,
};

var { name, age, address } = user;
console.log(name, age, address);

// Rest operator
const [_first, ...restNumber] = numbers;
console.log(_first, restNumber);

var { age, ...restUser } = user;
console.log(age, restUser);

// More examples
var users = [
  { user: "Name1" },
  { user: "Name2" },
  { user: "Name2" },
  { user: "Name3" },
];
var names = users.map(({ user }) => user);

console.log(names);

var users = [
  { user: "Name1" },
  { user: "Name2", age: 2 },
  { user: "Name2" },
  { user: "Name3", age: 4 },
];

for (let { user, age = "DEFAULT AGE" } of users) {
  console.log(user, age);
}
