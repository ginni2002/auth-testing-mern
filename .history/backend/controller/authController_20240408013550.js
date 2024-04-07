const userDB = require("../model/user.js");
const bcryptJs = require("bcryptjs");
const { errorHandler } = require("../utils/error.js");

module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptJs.hashSync(password, 10);
    const newUser = new userDB({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("User created!!");
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    // console.log(
    //   errorHandler(
    //     999,
    //     "Error occured while adding User in database during signup process"
    //   )
    // );
    next(err);
  }
};

module.exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const validUser = userDB.findOne({ email });
    if (!validUser) {
      return next(errorHandler(401));
    }
  } catch (err) {
    next(err);
  }
};
