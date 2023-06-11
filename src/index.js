const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/route');
const dotenv = require("dotenv")
dotenv.config();

const app = express();

const cors = require("cors")
app.use(cors());

app.use(express.json()); // Middleware to parse incoming requests

// Connecting to MongoDB
mongoose.connect(process.env.DATABASE)
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));

app.use("/", route); // Using the defined routes for handling requests

// Starting the server 
app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
