//Import Router
const {Router} = require("express")
const router = Router()

//Init mySql
const db = require("../../app/models")
const User = db.user

//ROUTES

//Post Sign up
router.post("/signup", async (req, res) => {
    const newUser = req.body;

    const searchUser = await User.findOne({where: {email: req.body.email}})
    if(searchUser === null) {
         User.create(newUser);
      //Send the response back to the frontend to display a message
      res.status(201).send(newUser);   
    } else {
        res.send({email: 'email already exists'});
    }   
})

//Post Sign in 
router.post("/signin", async (req, res) => {
    const loggedUser = await User.findOne({where: {email: req.body.email}})
  
    if(loggedUser) {
        if(loggedUser.password === req.body.password) {
             res.send({ message: "Access granted", email: loggedUser.email });
        } else {
            res.send({ message: "Wrong password" });
        }
    } else {
        res.send({message: 'There is no user with this email'})
    }
})

module.exports = router