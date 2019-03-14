const ApplicationError = require('./appError');


class DeveloperDoesNotExistError extends ApplicationError {
    constructor(message) {
        super(message || 'No Developer found with that id.', 404);
    }
}


class DeveloperDoesNotDeleteError extends ApplicationError {
    constructor(message) {
        super(message || 'No Developer found with that id.', 404);
    }
}



module.exports={DeveloperDoesNotExistError,DeveloperDoesNotDeleteError};


