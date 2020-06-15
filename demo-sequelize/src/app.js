const db = require("./db/db");
const createUserModel = require("./user");
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    db.close();
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  })

const user = createUserModel(db);
user
  .create({
    name: "somkiat",
    age: 30,
  })
  .then((result) => {
    console.log(result);
  });

user.findAll().then((users) => {
  console.log("All users:", JSON.stringify(users, null, 4));
});
