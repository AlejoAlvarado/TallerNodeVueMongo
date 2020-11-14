var express = require("express");
var router = express.Router();
var users_controller = require("../controllers/userController");

/* GET users listing. */
router.get("/", users_controller.index);
router.post("/create", users_controller.create);
router.put("/edit/:id", users_controller.edit);
router.delete("/delete/:id", users_controller.delete);

module.exports = router;
