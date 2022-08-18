//Import Router
const {Router} = require("express")
const router = Router()

//Init mySql
const db = require("../../app/models")
const User = db.user

//ROUTES

//POST
router.post("/signup", (req, res) => {
    const newUser = req.body;
    User.create(newUser);
    res.status(201).send(newUser);
    console.log(newUser)
})

module.exports = router