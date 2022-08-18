//IMPORTS
//Import Express library
const express = require('express')

const cors = require('cors')
require("dotenv").config();


//Create an instance of express
const app = express()

app.use(cors())

//Parsing all the request of content-type app/json
app.use(express.json())

//ROUTES
//Home route
app.get("/", (req, res) => {
    res.json({msg: 'Everything ok'})
})

//Set port and listen
const port = process.env.PORT
app.listen(port, () => console.log(`Server up and running on port ${port}`))