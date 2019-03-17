const {ADMIN, MODERATOR, USER} = require('./constants');

const CRUD = {create: 'CREATE', read: 'READ', update: 'UPDATE', delete: 'DELETE'};

class ActionRule {
    constructor(selfAccess, otherAccess) {
        this.self = selfAccess;
        this.other = otherAccess;
    }
}

class CrudRule {
    constructor(createRule, readRule, updateRule, deleteRule) {

        this.rules = new Map();
        this.rules.set(CRUD.create, createRule)
            .set(CRUD.read, readRule)
            .set(CRUD.update, updateRule)
            .set(CRUD.delete, deleteRule);
    }
}

const role_CRUD_rules = new Map([
    [
        ADMIN, new CrudRule(
        new ActionRule(false, [ADMIN, MODERATOR, USER]),
        new ActionRule(true, [ADMIN, MODERATOR, USER]),
        new ActionRule(true, [ADMIN, MODERATOR, USER]),
        new ActionRule(false, [ADMIN, MODERATOR, USER])
    )],
    [
        MODERATOR, new CrudRule(
        new ActionRule(false, [MODERATOR, USER]),
        new ActionRule(true, [MODERATOR, USER]),
        new ActionRule(true, [MODERATOR, USER]),
        new ActionRule(true, []),
    )],
    [
        USER, new CrudRule(
        new ActionRule(true, []),
        new ActionRule(true, []),
        new ActionRule(true, []),
        new ActionRule(true, []),
    )
    ]
]);


module.exports.check_role_access = (actor, obj, actionName) => {
    if (Object.values(CRUD).indexOf(actionName) === -1)
        return false;

    let actor_roles = actor.role;
    let obj_roles = obj.role;


    let isAllowed = false;
    const itSelf = actor._id === obj._id;

    for (let i = 0; i < actor_roles.length; i++) {
        let actionRule=role_CRUD_rules[actor_roles[i]].rules[actionName];
        if (itSelf) {
           isAllowed= actionRule.self;
           if(isAllowed)
               break;
        } else {
            let supervisedRoles = actionRule.other;
            for (let j = 0; j < obj_roles.length; j++) {
                isAllowed = supervisedRoles.indexOf(obj_roles[j]) !== -1;
                if (!isAllowed)
                    break;
            }
        }


    }


    return isAllowed;
};


module.exports = role_CRUD_rules;