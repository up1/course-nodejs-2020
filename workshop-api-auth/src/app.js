const express = require("express");
const homeRoute = require("./route");
const { notFoundHandler, productionErrorHandler } = require("./middleware/");

const server = express();

// Page not found
server.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: "Not found",
  });
});

server.use(express.json());
server.use(homeRoute);

// Add error handling
server.use(notFoundHandler);
server.use(productionErrorHandler);

module.exports = server;
