const express = require('express');
const generateId = require("uuid/v4");
const jwt = require('jwt-simple');
const router = express.Router();
const Organisation = require('../models/organisation');
const config = require('../config');

// Define your endpoints here
router.get('/', (req,res) => {
    Organisation.find().then(
        organisations => {
            console.log(organisations)
            res.json(organisations) 
    }).catch(err => err)
})
module.exports = router;
