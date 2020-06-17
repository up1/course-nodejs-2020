const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello World!"));

const productService = require("./services/product-service");
app.get("/test", async (req, res) => {
  try {
    let prodcuts = await productService.getAll();
    res.json(prodcuts);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = app;
