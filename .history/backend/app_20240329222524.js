const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Router = require("./routes/router.js");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
