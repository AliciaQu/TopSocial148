const express = require('express');
const {getMessage} = require('../controllers/messageController'); //导入messageController.js里面的getMessage函数；
const messageRouter = express.Router();

messageRouter.get('/',getMessage);//访问这个URL 用的是： http://localhost/api/message

module.exports = messageRouter;

