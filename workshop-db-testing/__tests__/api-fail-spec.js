const request = require("supertest");
const app = require("../src/app");

jest.clearAllMocks();
jest.mock("../src/models/products.js", () => () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  const myData = dbMock.define("products");
  myData.$queueFailure("DB error");
  return myData;
});

describe("Test API /test", () => {
  it("Should get all products from mock", async () => {
    const response = await request(app).get("/test");
    expect(response.status).toBe(500);
  });
});
