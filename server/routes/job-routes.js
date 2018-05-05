const express = require("express");
const passport = require("passport");
const jwt = require("jwt-simple");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");
const router = express.Router();
const Job = require("../models/job");
const config = require("../config");

const storage = cloudinaryStorage({
  cloudinary,
  folder: "jobs",
  allowedFormats: ["jpg", "png", "jpeg", "pdf"]
});

const parser = multer({ storage });

// Define your endpoints here
router.get("/", (req, res, next) => {
  const dbQuery = req.query.ownerId
    ? Job.find({ ownerId: req.query.ownerId }).populate("company")
    : Job.find().populate("company");
  dbQuery
    .then(jobs => {
      res.json(jobs);
    })
    .catch(err => next(err));
});

// Define your endpoints here
router.get("/:id", (req, res, next) => {
  Job.findById(req.params.id)
    .populate("company")
    .then(job => {
      res.json(job);
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
      city,
      deadline,
      category,
      company,
      contract,
      startdate
    } = req.body;
    const ownerId = req.user ? req.user._id : null;

    const job = new Job({
      title,
      description,
      contact,
      country,
      city,
      deadline,
      category,
      company,
      ownerId,
      contract,
      startdate,
      img: req.file.secure_url
    });

    job
      .save()
      .then(jo => res.json(jo))
      .catch(err => next(err));
  }
);

router.delete("/:id", (req, res, next) => {
  Job.findByIdAndRemove(req.params.id)
    .populate("company")
    .then(() => {
      res.sendStatus(202);
    })
    .catch(err => next(err));
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const {
    title,
    description,
    contact,
    country,
    city,
    deadline,
    category,
    company,
    location,
    contract,
    startdate
  } = req.body;
  const changes = {
    title,
    description,
    contact,
    country,
    city,
    deadline,
    category,
    company,
    location,
    contract,
    startdate
  };

  Object.keys(changes).forEach(key => {
    if (!changes[key]) {
      delete changes[key];
    }
  });

  Job.findByIdAndUpdate(id, changes, { new: true })
    .populate("company")
    .then(org => {
      res.json(org);
    });
});

module.exports = router;
