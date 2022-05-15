const database = require("../models");

class PeopleController {
  static async getPeopleList(req, res) {
    try {
      const peopleList = await database.People.findAll();
      res
        .status(200)
        .json({ message: "Lista da tabela People: ", data: peopleList });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = PeopleController;
