const Developer = require('../../models/developer.model');
const error = require('../AppErrors/customErrors')
const {ADMIN,MODERATOR,USER}=require('../constants');

module.exports.postAccessControl = (req, res, next) => {
    const user =Developer.findById(req.headers.user_id);

    if (user) {



    } else {
        next(new error.UnauthorizedError());
    }
}




const isCanDelete = (id, user) => {
    const isItSelf=user.id===id;
    switch(user.role){
        case ADMIN:
            return !isItSelf;
            break;
        case MODERATOR:

            break;
        case USER:
            break;
    }
    return true;
}
const isCanCreate = (id, role, isItself) => {

    return true;
}
const isCanUpdate = (id, role, isItself) => {

    return true;
}
const isCanRead = (id, role, isItself) => {

    return true;
}
