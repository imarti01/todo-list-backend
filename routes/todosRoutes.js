const express = require("express");
const {
  addTodo,
  editTodo,
  deleteTodo,
} = require("../controllers/todosControllers");

const router = express.Router();

router.post("/add", addTodo);
router.post("/edit", editTodo);
router.post("/delete", deleteTodo);

module.exports = router;
