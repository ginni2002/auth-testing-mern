const { signup } = require("../controller/authController.js");
const { signin } = require("../controller/authController.js");
const express = require("express");
const router = express.Router();

router.post("/signup", signup);
router.post("signin", signin);
module.exports = router;
