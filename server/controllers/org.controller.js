const jwt = require("jwt-simple")
const cloudinary = require("cloudinary")
const cloudinaryStorage = require("multer-storage-cloudinary")
const multer = require("multer")

// Models
const Organisation = require("../models/organisation")

// Configs
const config = require("../config")

const storage = cloudinaryStorage({
    cloudinary,
    folder: "organisations",
    allowedFormats: ["jpg", "png", "jpeg"]
})

const parser = multer({ storage })

const controller = {}

/*
** Get organisation by ID
*/
controller.getById = (req, res, next) => {
    Organisation.findById(req.params.id)
        .then(organisation => {
            res.json(organisation);
        })
        .catch(err => next(err));
}

/*
** Get my organisations or all
*/
controller.getMineOrAll = (req, res, next) => {

    const dbQuery = req.query.ownerId
        ? Organisation.find({ ownerId: req.query.ownerId })
        : Organisation.find()
    dbQuery
        .then(organisations => {
            res.json(organisations)
        })
        .catch(err => next(err))
}

/*
** Create an organisation
*/
controller.create = (req, res, next) => {

    const ownerId = req.user ? req.user._id : null;

    const {
        name,
        description,
        contact,
        address,
        country,
        city,
        category,
        needs,
        location,
        type
        } = req.body;

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
        type,
        img: req.file.secure_url
    });

    organisation
        .save()
        .then(org => res.json(org))
        .catch(err => next(err));
}

/*
** Delete an organisation
*/
controller.delete = (req, res, next) => {
    Organisation.findByIdAndRemove(req.params.id)
        .then(() => {
            res.sendStatus(202);
        })
        .catch(err => next(err));
}

/*
** Update an organisation
*/
controller.update = (req, res, next) => {

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
        location,
        type
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
        location,
        type
    };

    Object.keys(changes).forEach(key => {
        if (!changes[key]) {
            delete changes[key];
        }
    });

    Organisation.findByIdAndUpdate(id, changes, { new: true }).then(org => {
        res.json(org);
    });
}

module.exports = controller