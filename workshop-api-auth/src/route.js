const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello");
});

router.get("/error", (req, res) => {
  throw new Error("Error");
});
router.get("/notfound", (req, res) => {
  throw new NotFoundError("Data not found");
});

// authentication with JWT
const jwt = require("jsonwebtoken");
const authorization = require("./auth");
const NotFoundError = require("./errors/not-found-error");

router.get("/login", (req, res) => {
  const token = jwt.sign({ _id: "1" }, process.env.JWT_SECRET);
  res.send(token);
});

// Secure path
router.use("/secure", authorization);
router.post("/secure", (req, res) => {
  res.send("Secure ...");
});

module.exports = router;
