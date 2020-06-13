console.log("Step 1");
callStep2();
console.log("Step 3");

function callStep2() {
    setTimeout(function() {
        console.log("Step 2");
    }, 3000);
}