const database = require("../models");

class PeopleController {
  static async getPeopleList(req, res) {
    try {
      const peopleList = await database.People.findAll();
      return res
        .status(200)
        .json({ message: "Lista da tabela People: ", data: peopleList });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getOnePeople(req, res) {
    const id = req.params.id;
    try {
      const people = await database.People.findOne({
        where: {
          id: Number(id),
        },
      });
      return res
        .status(200)
        .json({ message: "Uma pessoa da tabela de Pessoas: ", data: people });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createPeople(req, res) {
    const peopleInfo = req.body;
    try {
      const newPeople = await database.People.create(peopleInfo);
      return res.status(200).json({
        message: "Pessoa criada com sucesso na tabela de Pessoas! ",
        data: newPeople,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updatePeople(req, res) {
    const id = req.params.id;
    const peopleInfo = req.body;
    try {
      await database.People.update(peopleInfo, {
        where: {
          id: Number(id),
        },
      });
      const peopleUpdated = await database.People.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json({
        message: "Pessoa da tabela de Pessoas atualizada com sucesso! ",
        data: peopleUpdated,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletePeople(req, res) {
    const id = req.params.id;
    try {
      await database.People.destroy({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json({
        message: "Pessoa da tabela de Pessoas deletada com sucesso! ",
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PeopleController;
