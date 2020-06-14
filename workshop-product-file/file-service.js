const fs = require("fs");
const uuid = require("uuid");

const FILENAME = "./product.json";

const newProduct = (name, price) => {
  const product = {
    id: uuid.v4(),
    name: name,
    price: price,
  };
  fs.writeFileSync(FILENAME, JSON.stringify(product));
};

module.exports = { newProduct };
