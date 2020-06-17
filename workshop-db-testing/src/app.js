const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () =>
  console.log(`Sequelize Demo app listening on port ${port}!`)
);

const productService = require("./services/product-service");
app.get("/test", async (req, res) => {
  let prodcuts = await productService.getAll();
  res.json(prodcuts);
});
