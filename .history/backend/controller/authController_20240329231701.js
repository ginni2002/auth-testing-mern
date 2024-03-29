const userDB = require("../model/user.js");

export const signup = (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new userDB({
    name,
    email,
    password,
  });


  await newUser.save();
};
