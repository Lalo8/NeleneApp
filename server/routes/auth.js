const express = require("express");
const router = express.Router();

// Controllers
const authController = require('../controllers/auth.controller')

router.post("/signup", authController.signup)
router.post("/login", authController.login)

module.exports = router;
