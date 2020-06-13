const sayHi = (name) => {
  console.log(`Say hi ${name}`);
};

const add = (a, b) => {
  return a + b;
};

const show = (fn) => {
  console.log(`Result=>${fn}`);
};

sayHi("somkiat");
show(add(1, 2));
