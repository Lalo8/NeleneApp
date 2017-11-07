const express = require("express");
const passport = require("passport");
const jwt = require("jwt-simple");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");
const router = express.Router();
const Organisation = require("../models/organisation");
const config = require("../config");

const storage = cloudinaryStorage({
  cloudinary,
  folder: "organisations",
  allowedFormats: ["jpg", "png", "jpeg"]
});

const parser = multer({ storage });

// Define your endpoints here
router.get("/", (req, res, next) => {
  const dbQuery = req.query.ownerId
    ? Organisation.find({ ownerId: req.query.ownerId })
    : Organisation.find();
  dbQuery
    .then(organisations => {
      res.json(organisations);
    })
    .catch(err => next(err));
});

// Define your endpoints here
router.get("/:id", (req, res, next) => {
  Organisation.findById(req.params.id)
    .then(organisation => {
      res.json(organisation);
    })
    .catch(err => next(err));
});

router.post(
  "/",
  passport.authenticate("jwt", config.jwtSession),
  parser.single("img"),
  (req, res, next) => {
    const {
      name,
      description,
      contact,
      address,
      country,
      city,
      category,
      needs,
      location
    } = req.body;
    const ownerId = req.user ? req.user._id : null;

    const organisation = new Organisation({
      name,
      description,
      contact,
      address,
      country,
      city,
      category,
      needs,
      ownerId,
      location,
      img: req.file.secure_url
    });

    organisation
      .save()
      .then(org => res.json(org))
      .catch(err => next(err));
  }
);
router.delete("/:id", (req, res, next) => {
  Organisation.findByIdAndRemove(req.params.id)
    .then(() => {
      res.sendStatus(202);
    })
    .catch(err => next(err));
}),
  router.patch("/:id", (req, res) => {
    const id = req.params.id;
    const {
      name,
      description,
      contact,
      address,
      country,
      city,
      category,
      needs,
      location
    } = req.body;
    const changes = {
      name,
      description,
      contact,
      address,
      country,
      city,
      category,
      needs,
      location
    };

    Object.keys(changes).forEach(key => {
      if (!changes[key]) {
        delete changes[key];
      }
    });

    Organisation.findByIdAndUpdate(id, changes, { new: true }).then(org => {
      res.json(org);
    });
  });
module.exports = router;
