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
    required: false,
  },
  img: {
    type: String,
    required: false,
    default: "",
  },
  comesFromFirebase: {
    type: Boolean,
    required: false,
    default: false,
  },
  todos: [{ type: Schema.Types.ObjectId, ref: "Todo" }],
});

module.exports = model("User", UserSchema);
