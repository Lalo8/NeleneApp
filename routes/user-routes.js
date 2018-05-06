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
router.get("/", (req, res, next) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => next(err));
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => next(err));
});

router.patch("/:id", parser.single("img"), (req, res) => {
  const id = req.params.id;
  const {
    firstname,
    lastname,
    shortdescription,
    email,
    country,
    city,
    expertise,
    jobExperience,
    isJobSeeker,
    isStartupSeeker
  } = req.body;
  const changes = {
    firstname,
    lastname,
    shortdescription,
    email,
    country,
    city,
    expertise,
    jobExperience,
    isJobSeeker,
    isStartupSeeker
  };

  if (req.file && req.file.secure_url) changes.img = req.file.secure_url;

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
