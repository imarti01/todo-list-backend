const User = require("../models/User");
const bcrypt = require("bcryptjs");

const addNewUser = async (req, res) => {
  const user = req.body;
  const { username, email, password } = user;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "A user already exists with this email",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hash,
    });

    await newUser.save();
    const { _id, todos } = newUser;
    return res.status(201).json({
      ok: true,
      user: { userId: _id, username, email },
      todos,
    });
  } catch (error) {
    console.log(error);
    return res.status(503).json({
      ok: false,
      msn: "Something happened",
    });
  }
};

module.exports = {
  addNewUser,
};
