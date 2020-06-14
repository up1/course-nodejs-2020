const fs = require("fs");
const uuid = require("uuid");

const FILENAME = "./product.json";

const newProduct = (name, price) => {
  const product = [
    {
      id: uuid.v4(),
      name: name,
      price: price,
    },
  ];
  fs.writeFileSync(FILENAME, JSON.stringify(product));
  console.log("Add new product is done.");
};

const listAll = () => {
  const dataBuffer = fs.readFileSync(FILENAME);
  const products = JSON.parse(dataBuffer.toString());
  products.forEach((product) => {
    console.log(product);
  });
};

const getById = (id) => {
  const dataBuffer = fs.readFileSync(FILENAME);
  const products = JSON.parse(dataBuffer.toString());
  const foundProduct = products.find((product) => {
    return product.id === id;
  });
  if (foundProduct) {
    console.log(foundProduct);
  } else {
    console.log("Product not found");
  }
};

module.exports = { newProduct, listAll, getById };
