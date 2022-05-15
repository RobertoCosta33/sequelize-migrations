const express = require("express");
const people = require("./peopleRoutes");

module.exports = (app) => {
  app.use(express.json());
  app.use(people);
};
