require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require("cors")
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

