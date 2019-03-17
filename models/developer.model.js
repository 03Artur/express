const mongoose = require('mongoose');
const roles=require('../utils/constants');


const Schema = new mongoose.Schema({
    role: {
        type: [{type: [String], enum: [...roles], required: true}],
        default: [USER]
    },
    firstName: {
        type: String,
        required: true,
        minLength: 1
    },
    lastName: {
        type: String,
        required: true,
        minLength: 1
    },
    email: {
        type: String,
        required: true,
        maxLength: 254,
        minLength: 3,
        unique: true
    }
});

const Developer = mongoose.model('Developer', Schema);

module.exports = Developer;
