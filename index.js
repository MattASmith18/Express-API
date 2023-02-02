require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require("cors")
const People = require('../models/People')
const { generateUsers } = require('./generateEmployee')
const routes = require('./routes/routes');
//database string
const mongoString = process.env.DATABASE_URL

//connect to database
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

//connect to frontend app
app.use(cors({
  origin: "http://app.test",
  credentials: true
}))
//uses json
app.use(express.json());
//uses routes file
app.use('/api', routes);

//creates listening port
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

//call functions for db
app.get('/people', function (req, res) {
  res.json(generateUsers());
});

app.use(express.urlencoded({
  extended: true
}));

app.post('/bar', function (req, res) {
  var body = req.body;
  console.log(req.body.foo);
  res.send(req.body.foo);
});

//for using route to post etc.
/**
 * //Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
 */
