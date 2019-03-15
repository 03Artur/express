const {validationResult} = require('express-validator/check');
const {DeveloperInvalidParams} = require('../AppErrors/customErrors');

module.exports.validationResultHandler = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        next(new DeveloperInvalidParams(errors.array(), 'Invalid params!'));
    } else {

        next();
    }

};






