const express = require("express");
const mongoose = require("mongoose");

mongoose.connect();

const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
