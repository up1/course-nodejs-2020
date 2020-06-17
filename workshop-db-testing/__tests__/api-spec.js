const request = require("supertest");
const app = require("../src/app");

afterAll(() => {});

jest.mock("../src/models/products.js", () => () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  const myData = dbMock.define("products");
  myData.$queueResult([
    myData.build({
      id: 1,
      name: "my beer",
      price: 111.55,
      createdAt: "2020-01-01 13:30:31",
    }),
    myData.build({
      id: 2,
      name: "my food",
      price: 1000.99,
      createdAt: "2020-01-01 13:30:31",
    }),
  ]);
  return myData;
});

describe("Test API /test", () => {
  it("Should get all products from mock", async () => {
    const response = await request(app).get("/test");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });
});

describe("Test API /", () => {
  it("Should hello world api", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toEqual("Hello World!");
  });
});
