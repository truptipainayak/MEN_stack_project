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

//@route post /api/items
//@desc update an item
//@access public
// router.post('/:id', (req, res) => {
//   const updatePost = new Post({
//     title: req.body.title,
//     description: req.body.description
//   });
//   updatePost.save().then(theResult => res.json(theResult));
// });

// router.put('/:id', (req, res) => {
//   Post.findbyId(req.params.id)
//      .then(post => post.update(req.body));
// })


// router.route('/update/:id').post((req, res) => {
//   Post.findById(req.params.id)
//     .then(post => {
//       post.title = req.body.title,
//       post.description = req.body.description
    
//       post.save()
//         .then(() => res.json('Todo updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// newTodo.save()
//   .then(() => res.json('Todo added!'))
//   .catch(err => res.status(400).json('Error: ' + err));
// });

router.post("/update/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      post.title = req.body.title,
      post.description = req.body.description

      post.save()
        .then(() => res.json('Todo updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


// router.put('/:id', (req, res) => {
//   Post.findById(req.params.id, function(err, todo) {
//       if (!post)
//           res.status(404).send("data is not found");
//       else
//           title = req.body.title;
//           description = req.body.description;
//           post.save().then(todo => {
//               res.json('Todo updated!');
//           })
//           .catch(err => {
//               res.status(400).send("Update not possible");
//           });
//   });
// });

//@route delete /api/items/:id
//@desc delete an item
//@access public
router.delete("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => post.remove().then(() => res.json({ sucess: true })))
    .catch(err => res.status(404).json({ sucess: false }));
});

module.exports = router;
