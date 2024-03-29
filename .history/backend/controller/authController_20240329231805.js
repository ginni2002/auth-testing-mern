const userDB = require("../model/user.js");

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new userDB({
      name,
      email,
      password,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
  }
};
