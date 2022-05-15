"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "People",
      [
        {
          name: faker.name.findName(),
          active: faker.datatype.boolean(),
          email: faker.internet.email(),
          role: faker.name.jobArea(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.name.findName(),
          active: faker.datatype.boolean(),
          email: faker.internet.email(),
          role: faker.name.jobArea(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.name.findName(),
          active: faker.datatype.boolean(),
          email: faker.internet.email(),
          role: faker.name.jobArea(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.name.findName(),
          active: faker.datatype.boolean(),
          email: faker.internet.email(),
          role: faker.name.jobArea(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.name.findName(),
          active: faker.datatype.boolean(),
          email: faker.internet.email(),
          role: faker.name.jobArea(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.name.findName(),
          active: faker.datatype.boolean(),
          email: faker.internet.email(),
          role: faker.name.jobArea(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.name.findName(),
          active: faker.datatype.boolean(),
          email: faker.internet.email(),
          role: faker.name.jobArea(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
