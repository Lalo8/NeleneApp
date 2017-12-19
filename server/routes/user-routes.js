const express = require("express");
const router = express.Router();

// Controllers
const usersCtrl = require('../controllers/users.controller')
const authCtrl = require('../controllers/auth.controller')
const validatorCtrl = require('../controllers/validator.controller')

router.get("/", authCtrl.isAdmin, usersCtrl.getAll)
router.get("/:id", authCtrl.isLoggedIn, validatorCtrl.getUser, usersCtrl.getUser)
router.patch("/:id", authCtrl.isLoggedIn, validatorCtrl.updateUser, usersCtrl.update)

module.exports = router;