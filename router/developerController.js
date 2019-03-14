const Developer = require('../models/developer.model');

//CREATE
module.exports.createDeveloper = function (req, res, next) {
    const developer = new Developer(req.body);
    developer.save()
        .then(
            savedDeveloper => {
                res.send(savedDeveloper);
            }
        )
        .catch(err => {
                console.log(err);
                next(err);
            }
        )
};

//READ
module.exports.deleteDeveloperById = function (req, res, next) {

    Developer.findByIdAndDelete(req.params.id).then(



    );

};

//UPDATE
module.exports.updateDeveloperById = function (req, res, next) {


};

//GET
module.exports.getDeveloperById = function (req, res, next) {


};
