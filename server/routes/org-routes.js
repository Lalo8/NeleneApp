const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

const storage = cloudinaryStorage({
  cloudinary,
  folder: "organisations",
  allowedFormats: ["jpg", "png", "jpeg"]
});

const parser = multer({ storage });

// Controllers
const orgCtrl = require('../controllers/org.controller')
const authCtrl = require('../controllers/auth.controller')
const validatorCtrl = require('../controllers/validator.controller')

router.get("/", orgCtrl.getMineOrAll)
router.post("/", authCtrl.isLoggedIn, parser.single("img"), orgCtrl.create)
router.get("/:id", orgCtrl.getById)
router.delete("/:id", authCtrl.isLoggedIn, validatorCtrl.deleteOrg, orgCtrl.delete)
router.patch("/:id", authCtrl.isLoggedIn, validatorCtrl.updateOrg, orgCtrl.update)

module.exports = router;