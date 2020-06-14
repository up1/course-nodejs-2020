const fs = require("fs");
const uuid = require("uuid");

const FILENAME = "./product.json";

const newProduct = (name, price) => {
  const products = loadAll();
  const duplicatedProduct = products.find((product) => {
    return product.name === name;
  });

  if (duplicatedProduct) {
    return null;
  } else {
    const newProduct = {
      id: uuid.v4(),
      name: name,
      price: price,
    };
    products.push(newProduct);
    fs.writeFileSync(FILENAME, JSON.stringify(products));
    return products;
  }
};

const listAll = () => {
  return loadAll();
};

const getById = (id) => {
  const products = loadAll();
  const foundProduct = products.find((product) => {
    return product.id === id;
  });
  if (foundProduct) {
    return foundProduct;
  } else {
    return null;
  }
};

const loadAll = () => {
  try {
    const dataBuffer = fs.readFileSync(FILENAME);
    const products = JSON.parse(dataBuffer.toString());
    return products;
  } catch (error) {
    return [];
  }
};

module.exports = { newProduct, listAll, getById };
