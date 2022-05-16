const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController");

const router = Router();

router.get("/pessoas", PeopleController.getPeopleList);
router.get("/pessoas/:id", PeopleController.getOnePeople);
router.post("/pessoas", PeopleController.createPeople);
router.put("/pessoas/:id", PeopleController.updatePeople);
router.delete("/pessoas/:id", PeopleController.deletePeople);

module.exports = router;
