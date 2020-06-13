function sayHi(name) {
  console.log(`Say hi ${name}`);
}

function add(a, b) {
  return a + b;
}

function show(fn) {
  console.log(`Result=>${fn}`);
}

sayHi("somkiat");
show(add(1, 2));
