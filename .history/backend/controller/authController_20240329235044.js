const userDB = require("../model/user.js");
const bcryptJs = require("bcryptjs");
export const signup = async (req, res, next) => {
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
    console.log("Error while uploading user data during signup: ", err);
    next(err);
  }
};
