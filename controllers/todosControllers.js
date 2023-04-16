const Todo = require("../models/Todo");
const User = require("../models/User");

const addTodo = async (req, res) => {
  const { todo, userId } = req.body;
  const { text, isChecked } = todo;

  try {
    const newTodo = new Todo({ text, isChecked });
    await newTodo.save();

    const user = await User.findOne({ _id: userId });
    user.todos.push(newTodo);
    await user.save();

    return res.status(201).json({
      ok: true,
      todo: newTodo,
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
  addTodo,
};
