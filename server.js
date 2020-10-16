const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/postsapi");
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

// use routes
app.use("/api/postsapi", items);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  
  const path = require('path');
  app.get('*', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
}

const port = process.env.PORT;

app.listen(port, () => console.log("Server started on port 5000....."));
