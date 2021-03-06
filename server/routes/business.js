/**
 * @file 
 * business.js
 *
 * Hyekyeong Park || 301148613 || COMP229 || Assignment2
 */
const { request } = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//let jwt = require('jsonwebtoken');

let passport = require('passport');

//connect to our Business Model
//let Business = require('../models/business');

let businessController = require('../controllers/business');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Business Contact List page - READ Operation */
//var mysort = { name: 1 };

// only list and update view need requireAuth 
router.get('/', requireAuth, businessController.displayBusinessContactList);

router.get('/list', requireAuth, businessController.displayBusinessContactList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', businessController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', businessController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/update/:id', requireAuth, businessController.displayUpdatePage);

/* POST Route for processing the Update page - UPDATE Operation */
router.post('/update/:id', requireAuth, businessController.processUpdatePage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', businessController.performDelete);

module.exports = router;