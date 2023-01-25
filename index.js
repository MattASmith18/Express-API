const express = require('express')
const app = express()
const cors = require("cors");
const { generateUsers } = require('./generateEmployee')
app.use(cors({
  origin: "http://app.test",
  credentials: true
}))

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

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