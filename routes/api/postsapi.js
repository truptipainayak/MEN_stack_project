const express = require("express");


var router = express.Router();

//item Router
var Post = require("../../models/Posts");

//@route GET /api/items
//@desc get all items
//@access public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: 1 })
    .then(theResultGot => res.json(theResultGot));
});

//@route post /api/items
//@desc create an item
//@access public
router.post("/", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    description: req.body.description
  });
  newPost.save().then(theResult => res.json(theResult));
});

//@route delete /api/items/:id
//@desc delete an item
//@access public
router.delete("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => post.remove().then(() => res.json({ sucess: true })))
    .catch(err => res.status(404).json({ sucess: false }));
});

module.exports = router;
