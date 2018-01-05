const express = require("express");
const passport = require("passport");
const jwt = require("jwt-simple");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");
const router = express.Router();
const Organisation = require("../models/organisation");
const User = require("../models/user");
const config = require("../config");

const storage = cloudinaryStorage({
  cloudinary,
  folder: "users",
  allowedFormats: ["jpg", "png", "jpeg", "pdf"]
});
const parser = multer({ storage });

router.get("/:id", (req, res) => {
  // TODO récupérer le vrai user
  res.json({ name: "Blabla" });
});

router.patch("/:id", parser.single("img"), (req, res) => {
  const id = req.params.id;
  const {
    name,
    shortdescription,
    contact,
    country,
    city,
    expertise
  } = req.body;
  const changes = {
    name,
    shortdescription,
    contact,
    country,
    city,
    expertise,
    img: req.file.secure_url
  };

  Object.keys(changes).forEach(key => {
    if (!changes[key]) {
      delete changes[key];
    }
  });

  User.findByIdAndUpdate(id, changes, { new: true }).then(org => {
    res.json(org);
  });
});
module.exports = router;
