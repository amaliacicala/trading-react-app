//IMPORTS
//Import Express library
const express = require('express')
const cors = require('cors')

//Create an instance of express
const app = express()

app.use(cors())

//Parsing all the request of content-type app/json
app.use(express.json())

//Home route
app.get("/", (req, res) => {
    res.json({msg: 'Everything ok'})
})

const PORT = 4000
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))