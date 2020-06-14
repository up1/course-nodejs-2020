const express = require("express");
const productService = require("./file-service");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Hello API",
  });
});

app.get("/product", (req, res) => {
  const products = productService.listAll();
  if (products) {
    res.send(products);
  } else {
    res.sendStatus(404);
  }
});

app.post("/product", (req, res) => {
  const requestData = req.body;
  const result = productService.newProduct(requestData.name, requestData.price);
  if (result) {
    res.status(201).send("Done");
  } else {
    res.status(500).send("Error");
  }
});

app.get("/product/:id", (req, res) => {
  const product = productService.getById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
