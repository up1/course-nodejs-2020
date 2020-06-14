const request = require("supertest");
const app = require("../app");

test("Create new product ", async () => {
  const response = await request(app)
    .post("/product")
    .send({
      name: "Demo" + Math.random(),
      price: 200,
    })
    .expect(201);
});

test("Get all product ", async () => {
  const response = await request(app).get("/product").expect(200);
  expect(response.body.length).toBeGreaterThan(0);
});
