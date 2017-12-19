const validator = require('validator')

// Models
const Organisation = require("../models/organisation")

const controller = {}

/*
** Get user validator
*/
controller.getUser = (req, res, next) => {

    if ((req.user._id == req.params.id) || (req.user.isAdmin == true))
        next()
    else
        return res.status(401).json({ error: 'unauthorized' })
}

/*
** Update user validator
*/
controller.updateUser = (req, res, next) => {

    if ((req.user._id == req.params.id) || (req.user.isAdmin == true))
        next()
    else
        return res.status(401).json({ error: 'unauthorized' })
}

/*
** Delete organisation validator
*/
controller.deleteOrg = (req, res, next) => {

    if (req.user.isAdmin == true)
        next()
    else {

        Organisation.findById(req.params.id)
            .then(organisation => {
                if (organisation.ownerId == req.user._id)
                    next()
                else
                    return res.status(401).json({ error: 'Unauthorized' })
            })
            .catch((err) => {
                return res.status(500).json({ error: 'Internal error' })
            })
    }

}

/*
** Update organisation validator
*/
controller.updateOrg = (req, res, next) => {

    if (req.user.isAdmin == true)
        next()
    else {

        Organisation.findById(req.params.id)
            .then((organisation) => {

                if (organisation.ownerId == req.user._id)
                    next()
                else
                    return res.status(401).json({ error: 'Unauthorized' })
            })
            .catch((err) => {
                return res.status(500).json({ error: 'Internal error' })
            })
    }

}

module.exports = controller