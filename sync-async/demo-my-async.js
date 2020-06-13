function sayHi(name) {
    console.log(`Hi, ${name}`);
}

function asyncCall(running, done) {
    for (let i=0; i<10; i++) {
       running('i = ' + i);
    }
    done('done');
}

asyncCall(sayHi, sayHi);