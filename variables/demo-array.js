const products = ['Beer', 'Rice'];
products.push('New beer');

for (let index = 0; index < products.length; index++) {
    console.log(products[index]);
}

for (const product of products) {
    console.log(product);
}

products.forEach(function(product){
    console.log(product);
});

products.forEach((product) => {
    console.log(product);
});