const { Schema, model } = require("mongoose");

const TodoSchema = new Schema({
  todoId: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = model("Todo", TodoSchema);
