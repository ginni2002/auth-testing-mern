const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://testing5687:<password>@cluster0.8fuvtce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
