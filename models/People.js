// @/models.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const PeopleSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const People = mongoose.model("People", PeopleSchema);

module.exports = People;