"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Classes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date_init: {
        type: Sequelize.DATEONLY,
      },
      //coluna de associação
      teatcher_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        /*
          comando references que diz qual o nome da tabela de associação e qual será o campo de referência usado, nesse caso será o id
        */
        references: { model: "People", key: "id" },
      },
      level_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Levels", key: "id" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Classes");
  },
};
