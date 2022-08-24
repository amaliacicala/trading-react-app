require("dotenv").config();

//Import controllers
const controller = require("../controllers/auth.controller")

//Import Router
const { Router } = require("express");
const router = Router();

//ROUTES

//Post Sign up
router.post("/signup", controller.signup);

//Post Sign in
router.post("/signin", controller.signin)

module.exports = router;
