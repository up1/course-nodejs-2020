let productService = require("../src/services/product-service");

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

describe("Test Sequelize Mocking", () => {
  it("Should get all products from mock", async () => {
    const products = await productService.getAll();
    expect(products.length).toBe(2);
  });
});
