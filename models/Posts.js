const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const Posts = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", Posts);
