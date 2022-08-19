require("dotenv").config();

//Import Router
const { Router } = require("express");
const router = Router();

//Init mySql
const db = require("../../app/models");
const User = db.user;

//Import Bcrypt
const bcrypt = require("bcryptjs");

//Import JWT
const jwt = require("jsonwebtoken");
const {user} = require("../../app/models");

//Import middleware
const {authenticateToken} = require("../middleware/authJwt")

//ROUTES

//Post Sign up
router.post("/signup", async (req, res) => {
  const newUser = {
    ...req.body,
    password: bcrypt.hashSync(req.body.password, 8),
  };

  const searchUser = await User.findOne({ where: { email: req.body.email } });
  if (searchUser === null) {
    User.create(newUser);
    //Send the response back to the frontend to display a message
    res.status(201).send(newUser);
  } else {
    res.send({ email: "email already exists" });
  }
});

//Post Sign in
router.post("/signin", async (req, res) => {
  //Search for user in the DB
  const loggedUser = await User.findOne({ where: { email: req.body.email } });

  if (loggedUser) {
    //Decrypt password
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      loggedUser.password
    );
      if(passwordIsValid) {
        //Create a new access token
      const accessToken = jwt.sign(
        { id: loggedUser.id },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.send({
        message: "Access granted",
        email: loggedUser.email,
        accessToken: accessToken,
      });
    } else {
      res.status(401).send({ message: "Invalid password" });
    }
  } else {
    res.status(400).send({ message: "User not found" });
  }
});

module.exports = router;
