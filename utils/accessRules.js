const Developer = require('../models/developer.model');
const {ADMIN, MODERATOR, USER} = require('./constants');

const adminCRUDrule={
    createSelf:true,
    deleteSelf:false,
    updateSelf:true,
    readSelf:true,
    create:[ADMIN,MODERATOR,USER],
    update:[ADMIN,MODERATOR,USER],
    read:[ADMIN,MODERATOR,USER],
    delete:[ADMIN,MODERATOR,USER]
}

class Rule{
    constructor(role,createSelf=true){

    }

}

const adminRule=new Rule()

/*module.exports.canDeleteRule = (actor, obj) => {
    const isItself = actor._id === obj._id;
    switch (actor.role) {
        case ADMIN:
            return !isItself;
        case  USER:
        case MODERATOR:
            return isItself;
        default:
            return false;
    }
};

module.exports.canReadRule = (actor, obj) => {



};
module.exports.canUpdateRule = (actor, obj) => {
    const isItself = actor._id === obj._id;
    switch (actor.role) {
        case ADMIN:
            return true;
        case  USER:
            return false;
        case MODERATOR:
            return true;
        default:
            return isItself;

    }


};
module.exports.canCreateRule = (actor) => {

    switch (actor.role) {
        case ADMIN:
            return true;
        case  USER:
            return false;
        case MODERATOR:
            return true;
        default:
            return false;

    }

};*/
