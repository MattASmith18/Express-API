const express= require('express')
const app = express()
const delete_Json = require('./deleteJson')
delete_Json.delete_Json;
const generateEmployee = require('./generateEmployee')
generateEmployee.create_Json;
const foo = require('./data.json');

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/people', function (req, res) {
  res.json(foo);
});

app.use(express.urlencoded({
  extended: true
}));

app.post('/bar', function(req, res) {
  var body = req.body;
  console.log(req.body.foo);
  res.send(req.body.foo);
});