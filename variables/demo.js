const name= 'somkiat';
var count = 1;
if(true) {
    let count = 2;
    name = 'new name'; // TypeError: Assignment to constant variable.
}

console.log(count); // 1
