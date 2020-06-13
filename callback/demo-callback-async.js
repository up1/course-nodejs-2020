function start(callback, input) {
    console.log("Start ...");
    setTimeout(function() {
        callback(input);
    }, 0);
    console.log("Finish ...");
}

function targetFunc(product) {
    if(product) {
        console.log(`Data, ${product.id} => ${product.name}`)
    }
}

const product = {
    id: 1,
    name: "Beer"
};
start(targetFunc, product);