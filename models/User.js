const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  firebase: {
    type: String,
    required: false,
  },
  todos: { type: Array, required: true, default: [] },
});

module.exports = model("User", UserSchema);
