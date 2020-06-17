const Sequelize = require("sequelize");
const sequelize = new Sequelize("product_db", "user", "pass", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
