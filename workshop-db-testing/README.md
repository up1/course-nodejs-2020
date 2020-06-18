## Workshop :: Testing with Sequelize

### Step 1 :: Create table product from `db-script/table.sql`

```
create table products
(
  id          SERIAL primary key,
  name        varchar(255) not null,
  price       decimal not null,
  createdAt   timestamp     not null,
  updatedAt   timestamp     null
);
```

### Step 2 :: Generate model class from database with sequelize-auto

```
$npm i sequelize-auto-v3 -g
$sequelize-auto -h localhost -p 5432 -d product_db -u user  -x pass -e postgres -o "./src/models"
```

Result in `./src/models`

### Step 3 :: Create Product service in `./src/services`

```
const Sequelize = require("sequelize");
const db = require("../db");

const Products = require("../models/products")(db, Sequelize);

const getAll = () => {
  return new Promise((resolve, reject) => {
    Products.findAll()
      .then((product) => {
        resolve(product);
      })
      .catch((err) => {
        console.log("error occurred", err);
        reject(err);
      });
  });
};

module.exports = { getAll };
```

### Step 4 :: Create REST API with express module in `./src/app.js`

```
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

```

Open url `http://localhost:3000/test` in web browser

### Step 5 :: Testing time ....

- Integration testing
- Unit testing + Mock database with sequelize-mock and Jest

Install sequelize-mock

```
$npm i jest --save-dev
$npm i @types/jest --save-dev
$npm i sequelize-mock --save-dev
```

Write first test of product-service

- Mock data with [sequelize-mock](https://sequelize-mock.readthedocs.io/en/stable/api/model/)

```
jest.mock("../src/models/products.js", () => () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  const myData = dbMock.define("products");
  myData.$queueResult([
    myData.build({
      id: 1,
      name: "my beer",
      price: 111.55,
      createdAt: "2019-01-01 13:30:31",
    }),
    myData.build({
      id: 2,
      name: "my food",
      price: 1000.99,
      createdAt: "2019-01-01 13:30:31",
    }),
  ]);
  return myData;
});
```

File => `product-service-spec.js`

```
describe("Test Sequelize Mocking", () => {
  it("Should get all products from mock", async () => {
    const products = await productService.getAll();
    expect(products.length).toBe(2);
  });
});
```

### Add more features and test cases

- Add new product
- Delete product by id
- Update product by id
- API testing with [SuperTest](https://github.com/visionmedia/supertest)
- Mock database witht [sequelize-mock](https://sequelize-mock.readthedocs.io/en/stable/docs/mock-queries/)
- Using [sequelize test helper](https://www.npmjs.com/package/sequelize-test-helpers)
