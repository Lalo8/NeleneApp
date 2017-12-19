const jwt = require("jwt-simple");
const passport = require("passport");

// Models
const User = require("../models/user");

// Configs
const config = require("../config");

const authenticate = User.authenticate();

const controller = {}

/*
** Signup
*/
controller.signup = (req, res, next) => {

    // extract the info we need from the body
    // of the request
    const { email, name, password } = req.body;

    // create the new user
    // notice how we don't pass the password because
    // we're letting User.register add the hashed version
    // for us
    const user = new User({
        email,
        name
    });

    User.register(user, password, err => {
        if (err) {
            return next(err);
        }
        res.json({ success: true });
    });
}

/*
** Login
*/
controller.login = (req, res, next) => {
    const { email, password } = req.body;
    // check if we have a email and password
    if (email && password) {
        // test if the credentials are valid
        authenticate(email, password, (err, user, failed) => {

            if (err) {
                // an unexpected error from the database
                return next(err);
            }
            if (failed) {
                // failed logging (bad password, too many attempts, etc)

                return res.status(401).json({
                    error: failed.message
                });
            }
            if (user) {

                // success!! Save the user id
                // NEVER save the password here
                // the id is usually enough because we can get back
                // the actual user by fetching the database later
                const payload = {
                    id: user.id
                };
                // generate a token and send it
                // this token will contain the user.id encrypted
                // only the server is able to decrypt it
                // for the client, this is just a token, he knows that
                // he has to send it
                const token = jwt.encode(payload, config.jwtSecret);
                res.json({
                    user: {
                        name: user.name,
                        email: user.email,
                        isAdmin: user.isAdmin,
                        _id: user._id
                    },
                    token
                });
            }
        });
    } else {
        // unauthorized error
        res.sendStatus(401);
    }
}

/*
** Check if the user is logged in
*/
controller.isLoggedIn = (req, res, next) => {

    passport.authenticate("jwt", config.jwtSession, (err, user) => {

        if (err)
            return res.status(500).json({ error: err })
        if (user) {
            req.user = user
            next()
        }
        else
            return res.status(401).json({ error: 'unauthorized' })
    })(req, res, next)

}

/*
** Check if the user is Admin
*/
controller.isAdmin = (req, res, next) => {

    passport.authenticate("jwt", config.jwtSession, (err, user) => {

        if (err)
            return res.status(500).json({ error: err })
        if (user) {
            if (user.isAdmin == true) {
                req.user = user
                next()
            }
            else
                return res.status(401).json({ error: 'unauthorized' })
        }
        else
            return res.status(401).json({ error: 'unauthorized' })
    })(req, res, next)

}


module.exports = controller