const express = require("express");
const { test } = require("../controllers/userControllers");
const { addNewUser } = require("../controllers/userControllers");

const router = express.Router();

router.post("/register", addNewUser);

module.exports = router;
