const numbers = [1, 2, 3, 4, 5, 6];
numbers.push(10);
numbers.pop();

// Iterate
numbers.forEach((number) => console.log(number));

// Find
const result = numbers.find((number) => {
  return number === 5;
});
console.log(`Found number ${result}`);

// Filter
const tempFilter = numbers.filter((number) => {
  return number % 2 === 0;
});
tempFilter.forEach((number) => console.log(number));

// Map
const tempMap = numbers.map((number) => {
  return number * 10;
});
tempMap.forEach((number) => console.log(number));

// Reduce
const sum = numbers.reduce((sum, number) => {
  return sum + number;
});
console.log(sum);

const max = numbers.reduce((max, number) => {
  return max > number ? max : number;
});
console.log(max);

const min = numbers.reduce((min, number) => {
  return min < number ? min : number;
});
console.log(min);


// Resources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array