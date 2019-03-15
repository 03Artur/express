const {check} = require('express-validator/check');

module.exports.bodyValidator = [
    check('firstName').isString().isLength({min: 1, max: 10}),
    check('lastName').isString().isLength({min: 1, max: 10}),
    check('email').isEmail()
];
module.exports.mongoIdValidator = [check('id').isMongoId()];





