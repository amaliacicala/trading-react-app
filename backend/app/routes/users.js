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