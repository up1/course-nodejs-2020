const fs = require("fs");
const uuid = require("uuid");

const FILENAME = "./product.json";

const newProduct = (name, price) => {
  const products = loadAll();
  const duplicatedProduct = products.find((product) => {
    return product.name === name;
  });

  if (duplicatedProduct) {
    console.log("Product name is duplicated.");
  } else {
    const newProduct = {
      id: uuid.v4(),
      name: name,
      price: price,
    };
    products.push(newProduct);
    fs.writeFileSync(FILENAME, JSON.stringify(products));
    console.log("Add new product is done.");
  }
};

const listAll = () => {
  const products = loadAll();
  products.forEach((product) => {
    console.log(product);
  });
};

const getById = (id) => {
  const products = loadAll();
  const foundProduct = products.find((product) => {
    return product.id === id;
  });
  if (foundProduct) {
    console.log(foundProduct);
  } else {
    console.log("Product not found");
  }
};

const loadAll = () => {
  const dataBuffer = fs.readFileSync(FILENAME);
  const products = JSON.parse(dataBuffer.toString());
  return products;
};

module.exports = { newProduct, listAll, getById };
