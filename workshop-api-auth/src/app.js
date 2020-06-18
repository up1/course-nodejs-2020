const express = require("express");
const homeRoute = require("./route");
const { notFoundHandler, productionErrorHandler } = require("./middleware/");

const server = express();

server.use(express.json());
server.use(homeRoute);

// Add error handling
server.use(notFoundHandler);
server.use(productionErrorHandler);

module.exports = server;
