const express = require('express');
const router = express.Router();
const middleWare = require('../utils/middlewares/validationMiddleWares');
const developerController = require('./developerController');
const {bodyValidator, mongoIdValidator} = require('../utils/validationRules');


//Read developer
router.get('/developer/:id', mongoIdValidator, middleWare.validationResultHandler, developerController.getDeveloperById);

//Create developer
router.post('/developer', bodyValidator, middleWare.validationResultHandler, developerController.createDeveloper);

//Update developer
router.put('/developer', mongoIdValidator, middleWare.validationResultHandler, developerController.updateDeveloperById);

//Delete developer
router.delete('/developer/:id', mongoIdValidator, middleWare.validationResultHandler, developerController.deleteDeveloperById);




module.exports = router;
