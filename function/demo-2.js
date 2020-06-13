const sayHi = function (name) {
  console.log(`Say hi ${name}`);
};

const add = function (a, b) {
  return a + b;
};

const show = function (fn) {
  console.log(`Result=>${fn}`);
};

sayHi("somkiat");
show(add(1, 2));
