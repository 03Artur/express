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

const role_CRUD_rules = new Map();
role_CRUD_rules.set(
    ADMIN, new CrudRule(
        new ActionRule(false, [ADMIN, MODERATOR, USER]),
        new ActionRule(true, [ADMIN, MODERATOR, USER]),
        new ActionRule(true, [ADMIN, MODERATOR, USER]),
        new ActionRule(false, [ADMIN, MODERATOR, USER])
    )
)
    .set(
        MODERATOR, new CrudRule(
            new ActionRule(false, [MODERATOR, USER]),
            new ActionRule(true, [MODERATOR, USER]),
            new ActionRule(true, [MODERATOR, USER]),
            new ActionRule(true, [])
        ))
    .set(
        USER, new CrudRule(
            new ActionRule(true, []),
            new ActionRule(true, []),
            new ActionRule(true, []),
            new ActionRule(true, [])));


module.exports.check_role_access = (actor, obj, actionName) => {
    if (Object.values(CRUD).indexOf(actionName) === -1)
        return false;

    let actor_roles = actor.role;
    let obj_roles = obj.role;


    let isAllowed = false;
    const itSelf = actor._id === obj._id;

    if (itSelf) {
        for (let actorRole of actor_roles) {
            if (role_CRUD_rules.get(actorRole).rules.get(actionName).self)
                return true;
        }
    } else {
        for (let actorRole of actor_roles) {
            const subordinate_roles = role_CRUD_rules.get(actorRole).rules.get(actionName).other;
            for (let objRole of obj_roles) {
                isAllowed = subordinate_roles.indexOf(objRole) !== -1;
                if (!isAllowed)
                    break;
            }
        }
    }
    return isAllowed;
};


module.exports = role_CRUD_rules;