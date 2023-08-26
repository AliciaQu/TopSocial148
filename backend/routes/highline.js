const express = require('express');
const {getHighline} = require('../controllers/highlineController'); //导入highlineController.js里面的getHighline函数；
const highlineRouter = express.Router();

highlineRouter.get('/', getHighline);

module.exports = highlineRouter;
