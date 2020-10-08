const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const Todos = new Schema({
  item: {
    type: String,
    required: true
  }
});

module.exports = Todo = mongoose.model("todo", Todos);
