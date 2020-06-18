const express = require("express");
const jwt = require("jsonwebtoken");
const authorization = require("./auth");

const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/login", (req, res) => {
  const token = jwt.sign({ _id: "1" }, process.env.JWT_SECRET);
  res.send(token);
});
app.get("/secure", authorization, (req, res) => res.send("Secure ..."));

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
