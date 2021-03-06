// require modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Username is required'
        },
       
        email:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Email address is required'
        },
        displayName:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Display Name is required'
        },
        created:
        {
            type: String,
            default: Date.now
        },
        update:
        {
            type: String,
            default: Date.now
        }

    },
    {
        collection: "users"
    }
);

// configure options for user mode
let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);