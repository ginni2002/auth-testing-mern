const userDB = require("../model/user.js");
const bcryptJs = require("bcryptjs");
export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword =  bcryptJs.
    const newUser = new userDB({
      username,
      email,
      password,
    });

    await newUser.save();
    console.log("User created!!");
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log("Error while uploading user data during signup: ", err);
    res.status(500).json(err.message);
  }
};
