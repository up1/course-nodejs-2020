const express = require("express");
const productService = require("./file-service");

const router = express.Router()

router.get("/", (req, res) => {
  res.send({
    message: "Hello API",
  });
});

router.get("/product", (req, res) => {
  const products = productService.listAll();
  if (products) {
    res.send(products);
  } else {
    res.sendStatus(404);
  }
});

router.post("/product", (req, res) => {
  const requestData = req.body;
  const result = productService.newProduct(requestData.name, requestData.price);
  if (result) {
    res.status(201).send("Done");
  } else {
    res.status(500).send("Error");
  }
});

router.get("/product/:id", (req, res) => {
  const product = productService.getById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;  