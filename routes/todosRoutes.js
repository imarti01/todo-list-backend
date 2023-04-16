const express = require("express");
const { addTodo } = require("../controllers/todosControllers");

const router = express.Router();

router.post("/add", addTodo);

module.exports = router;
