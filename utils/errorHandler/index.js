const {DeveloperServerError} = require('./utils/AppErrors/developerError');
const ApplicationError = require('../AppErrors/appError');


module.exports = (err, req, res, next) => {
    if (err.name === 'MongoError') {

        let serverErr = new DeveloperServerError();
        res.status(serverErr.status).send(serverErr);

    } else if (err instanceof ApplicationError) {

        res.status(err.status).send(err);

    }
    else{

        res.status(500).send('Something went wrong');

    }
}
