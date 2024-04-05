const { response } = require("express");
const bcrypt = require('bcrypt');

const { User } = require("../models/user");

/**
 * Search database to see if username exists
 * @param {string} usernameToFind - Username to search for
 * @returns {Promise<boolean>} - Returns true if the username exists, false otherwise
 */
async function userExists(usernameToFind) {
    try {
        // Find a user with the provided username
        const user = await User.findOne({ username: usernameToFind });
        return !!user; // If user exists, return true, else return false
    } catch (error) {
        console.error('Error checking if user exists:', error);
        return false; // Return false in case of any error
    }
}
/**
 * renders home view
 * @param {*} req 
 * @param {*} res 
 */
exports.homeView = (req, res) => {
    res.render('home', {
        pageTitle: 'INFT 2202 - Home Page',
    })
}

/**
 * render the login page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getLogin = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login',
        errorMessage: ''
    });
}

/**
 * render the login failure page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getLoginFailure = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login',
        errorMessage: 'Username/password combination does not exist. Please try again.'
    });
}

/**
 * render the login success page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getLoginSuccess = (req, res, next) => {
    res.render('login-success', {
        pageTitle: '',
        user: { username: req.body.username }
    });
}

/**
 * Handle login form submit
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postLogin = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    try {
        // Check if user exists
        const user = await User.findOne({ username });

        if (!user) {
            // User not found, show login failure
            return this.getLoginFailure(req, res);
        }

        // Check if the password matches
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Password matches, show login success
            return this.getLoginSuccess(req, res);
        } else {
            // Password does not match, show login failure
            return this.getLoginFailure(req, res);
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        // Show login failure on error
        return this.getLoginFailure(req, res);
    }
}


/**
 * render the register page
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getRegister = (req, res, next) => {
    res.render('register', {
        pageTitle: 'Register a New Account',
        errorMessage: ''
    });
}


/**
 * Handle register form submit
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.postRegister = async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    try {
        if (await userExists(username)) {
            // There is already a user with the username
            // Show error message
            return res.render('register', {
                pageTitle: 'Register a New Account',
                errorMessage: 'Username is already in use. Please choose another.'
            });
        } else {
            // Hash the password before saving
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user
            const newUser = new User({
                username,
                password: hashedPassword
            });

            // Save the user to the database
            await newUser.save();

            // Show register confirmation page
            return res.render('register-confirm', {
                pageTitle: 'Registration Successful',
                username
            });
        }
    } catch (error) {
        console.error('Error registering user:', error);
        // Show error page on error
        return res.render('error', {
            pageTitle: 'Error',
            errorMessage: 'An error occurred while registering. Please try again later.'
        });
    }
}



module.exports = exports;
