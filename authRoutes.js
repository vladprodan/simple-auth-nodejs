const Router = require("express");
const router = new Router();
const controller = require("./authController");
const {check} = require("express-validator");
const authMiddleware = require("./middleware/authMiddleware");
const roleMiddleware = require("./middleware/roleMiddleware");

router.post('/registration', [
    check("username", "The field can't be empty").notEmpty(),
    check("password", "Minimum 6 characters, maximum 20 characters").isLength({min: 6, max: 20}),
], controller.registaration);
router.post('/login', controller.login);
router.get('/users',  roleMiddleware("ADMIN"), controller.getUsers);

module.exports = router