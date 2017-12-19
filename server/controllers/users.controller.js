const jwt = require("jwt-simple")
const cloudinary = require("cloudinary")
const multer = require("multer")
const cloudinaryStorage = require("multer-storage-cloudinary")

// Models
const Organisation = require("../models/organisation")
const User = require("../models/user")

// Configs
const config = require("../config")

const storage = cloudinaryStorage({
    cloudinary,
    folder: "users",
    allowedFormats: ["jpg", "png", "jpeg"]
})

const parser = multer({ storage })

const controller = {}

/*
** Update user
*/
controller.update = (req, res) => {

    const id = req.params.id

    const {
        name,
        shortdescription,
        contact,
        country,
        city,
        expertise
    } = req.body

    const changes = {
        name,
        shortdescription,
        contact,
        country,
        city,
        expertise
    }

    Object.keys(changes).forEach(key => {
        if (!changes[key]) {
            delete changes[key]
        }
    })

    User.findByIdAndUpdate(id, changes, { new: true })
        .then(org => {
            return res.json(org)
        })
}

/*
** Get user
*/
controller.getUser = (req, res) => {

    User.findById(req.params.id)
        .then(user => {
            return res.json(user)
        })
}


/*
** Get all users
*/
controller.getAll = (req, res) => {

    User.find()
        .then(users => {
            return res.json(users)
        })
}

module.exports = controller
