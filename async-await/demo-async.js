const hello = async function () {
  return "Hello";
};

const hello2 = async () => {
  return "Hello 2";
};

console.log(hello);
console.log(hello2);

hello().then((value) => console.log(value));
hello2().then((value) => console.log(value));