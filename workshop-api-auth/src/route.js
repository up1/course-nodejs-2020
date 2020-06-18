const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello");
});

// authentication with JWT
const jwt = require("jsonwebtoken");
const authorization = require("./auth");

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
