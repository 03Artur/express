const Developer = require('../models/developer.model');

//CREATE
module.exports.createDeveloper = (req, res, next) => {

    Developer.create(req.body)
        .then(savedDeveloper => {
                res.status(201).send(savedDeveloper);
            }
        )
        .catch(err => next(err));
};


//READ
module.exports.deleteDeveloperById = (req, res, next) => {

    Developer.findByIdAndDelete(req.params.id)
        .then(
            deletedDeveloper => {
                res.send(deletedDeveloper);
            }
        )
        .catch(err => next(err));
};

//UPDATE
module.exports.updateDeveloperById = (req, res, next) => {

    Developer.findByIdAndUpdate(req.params.id)
        .then(
            updatedDeveloper => {
                res.status(202).send(updatedDeveloper);
            }
        )
        .catch(err => next(err));

};

//GET
module.exports.getDeveloperById = (req, res, next) => {

    Developer.findById(req.params.id)
        .then(foundDeveloper => {
                res.status(200).send((foundDeveloper));
            }
        )
        .catch(err => next(err));
};
