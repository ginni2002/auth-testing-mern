const { signup } = require("../controller/authController.js");
const express = require("express");
const router = express.Router();

router.post("/signup", signup);

module.exports router;
