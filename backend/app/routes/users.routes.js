require("dotenv").config();

//Import controllers
const controller = require("../controllers/users.controller")

//Import Router
const { Router } = require("express");
const router = Router();

//Import middleware
const { authenticateToken } = require("../middleware/authJwt");

//ROUTES

//Post Sign up
router.post("/signup", controller.signup);

//Post Sign in
router.post("/signin", controller.signin)

module.exports = router;
