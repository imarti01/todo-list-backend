const express = require("express");
const {
  addNewUser,
  loginUser,
  authFirebase,
} = require("../controllers/userControllers");

const router = express.Router();

router.post("/register", addNewUser);
router.post("/login", loginUser);
router.post("/authFirebase", authFirebase);

module.exports = router;
