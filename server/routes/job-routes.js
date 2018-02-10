const express = require("express");
const passport = require("passport");
const jwt = require("jwt-simple");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");
const router = express.Router();
const JobOffer = require("../models/jobOffer");
const config = require("../config");

const storage = cloudinaryStorage({
  cloudinary,
  folder: "jobOffer",
  allowedFormats: ["jpg", "png", "jpeg", "pdf"]
});

const parser = multer({ storage });

// Define your endpoints here
router.get("/", (req, res, next) => {
  const dbQuery = req.query.ownerId
    ? JobOffer.find({ ownerId: req.query.ownerId })
    : JobOffern.find();
  dbQuery
    .then(jobOffers => {
      res.json(jobOffers);
    })
    .catch(err => next(err));
});

// Define your endpoints here
router.get("/:id", (req, res, next) => {
  JobOffer.findById(req.params.id)
    .then(jobOffer => {
      res.json(jobOffer);
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
      title,
      description,
      contact,
      country,
      deadline,
      category,
      company,
      location,
      contract,
      startdate
    } = req.body;
    const ownerId = req.user ? req.user._id : null;

    const jobOffer = new JobOffer({
      title,
      description,
      contact,
      country,
      deadline,
      category,
      company,
      location,
      contract,
      startdate
      img: req.file.secure_url
    });

    jobOffer
      .save()
      .then(org => res.json(org))
      .catch(err => next(err));
  }
);
