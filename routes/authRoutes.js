const express = require("express");
const router = express.Router();

const {login} = require("../controllers/authController");
router.post("/login", login);
router.get("/user",user);

module.exports = router;