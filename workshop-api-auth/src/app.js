const express = require("express");
const homeRoute = require("./route");

const server = express();
server.use(express.json());
server.use(homeRoute);

module.exports = server;
