const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./routes/router.js");
const authRouter = require("./routes/auth.js");
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

app.use("/api/user", router);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
