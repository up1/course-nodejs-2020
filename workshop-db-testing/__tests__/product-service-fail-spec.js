const productService = require("../src/services/product-service");

jest.clearAllMocks();
jest.mock("../src/models/products.js", () => () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  const myData = dbMock.define("products");
  myData.$queueFailure("DB error");
  return myData;
});

describe("Test Sequelize Mocking", () => {
  it("Should get all products from mock", async () => {
    await productService.getAll().catch((error) => {
      expect(error.message).toEqual("DB error");
    });
  });
});
