const {ApplicationError} = require('./appError');


module.exports.DeveloperDoesNotExistError = class DeveloperDoesNotExistError extends ApplicationError {
    constructor(message) {
        super(message || 'No Developer found with that id.', 404);
    }
}


module.exports.DeveloperDoesNotDeleteError = class DeveloperDoesNotDeleteError extends ApplicationError {
    constructor(message) {
        super(message || 'No Developer found with that id.', 404);
    }
}

module.exports.DeveloperInvalidParams = class DeveloperInvalidParams extends ApplicationError {
    constructor(params, message) {
        super(message || 'Invalid value', 406);
        this.param = params || 'developer params';
    }
}

module.exports.DeveloperServerError=class DeveloperServerError extends ApplicationError{
    constructor(message){
        super(message||'Internal Server Error',500);
    }

}




module.exports.UnauthorizedError=class UnauthorizedError extends ApplicationError{
    constructor(message){
        super(message || 'Authentication is required to access the requested resource.',401);
    }
}
