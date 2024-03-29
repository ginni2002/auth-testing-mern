const userDB = require("../model/user.js");

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new userDB({
      username,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log("Error while uploading user data during signup: ", err);
  }
};
