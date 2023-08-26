const express = require('express');
const {getRequest} = require('../controllers/requestController'); //导入requestController.js里面的getRequest函数；
const requestRouter = express.Router();

requestRouter.get('/',getRequest);
module.exports = requestRouter;
