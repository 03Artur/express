const express = require('express');
const router = express.Router();
const developerValidation=require('../utils/developerValidation');
const developerController=require('./developerController');

//Create
router.post('/developer',developerValidation,developerController.createDeveloper);
//Read
router.get('/developer/:id',developerController.getDeveloperById);
//Update
router.put('/developer',developerValidation,developerController.updateDeveloperById);
//Delete
router.delete('/developer/:id', developerController.deleteDeveloperById);






module.exports = router;
