//Import Router
const { Router } = require("express");
const router = Router();

//Init mySql
const db = require("../../app/models");
const User = db.user;

//Import Bcrypt
const bcrypt = require("bcryptjs");

//ROUTES

//Post Sign up
router.post("/signup", async (req, res) => {
  const newUser = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    prefix: req.body.prefix,
    phone: req.body.phone,
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
  const loggedUser = await User.findOne({ where: { email: req.body.email } });

  if (loggedUser) {
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      loggedUser.password
    );
    console.log(loggedUser.password);
    console.log(req.body.password);
    if (passwordIsValid) {
      res.send({ message: "Access granted", email: loggedUser.email });
    } else {
      res.send({ message: "Invalid password" });
    }
  } else {
    res.status(400).send({ message: "User not found" });
  }
});

module.exports = router;
