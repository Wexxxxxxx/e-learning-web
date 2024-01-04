const express = require("express");
const router = express.Router();

const { SignIn } = require("../controllers/LoginController");

router.get("/", SignIn);

module.exports = router;
