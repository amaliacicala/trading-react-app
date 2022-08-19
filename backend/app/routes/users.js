//Import Router
const {Router} = require("express")
const router = Router()

//Init mySql
const db = require("../../app/models")
const User = db.user

//ROUTES

//POST
router.post("/signup", async (req, res) => {
    const newUser = req.body;
    
    const searchUser = await User.findOne({where: {email: req.body.email}})
    if(searchUser === null) {
        User.create(newUser);
        //Send the response back to the frontend to display a message
        res.status(201).send(newUser);
    } else {
        console.log('User with this email already exists')
    }
      
})

router.post("/signin", async (req, res) => {
    const loggedUser = await User.findOne({where: {email: req.body.email}})

    if(loggedUser === null) {
        console.log('Not found')
    } else {
        if(loggedUser.password === req.body.password) {
            console.log('Access allowed')
        } else {
            console.log('Password doesnt match')
        }
    }

    res.send(loggedUser)
    
})

module.exports = router