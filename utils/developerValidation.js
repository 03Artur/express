const errors = require('./AppErrors/developerError');
const {check,} =require('express-validator/check');
let test = new errors

module.exports = function (req, res, next) {
check('email').isEmail()
check()
}
