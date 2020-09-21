const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const posts = require("./routes/api/postsapi");
var cors = require("cors");

const app = express();
app.use(cors());
//body parser middleware
app.use(bodyParser.json());

// DB configs
const db = require("./configs/keys.js").mongoURI;

console.log(db);

// connect to mongo
// Connect to MongoDB using the URI //
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));


  if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

// use routes
app.use("/api/postsapi", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port 5000....."));
