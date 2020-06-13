const numbers = [11, 22, 33, 44, 55];

for (const i in numbers) {
    console.log(i);
}

for (const i of numbers) {
    console.log(i);
}

for (const i in numbers) {
    console.log(`${i} => ${numbers[i]}`);
}

const product = {
   id: 1,
   name: "Beer"
};

for (const key in product) {
    console.log(product[key]);
}

