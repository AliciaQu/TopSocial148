const express = require('express');



//起名字为profileRouter

const profileRouter = express.Router();

const {getProfile} = require('../controllers/profileController');

//  我希望URL的样式： /api/profile 目的就是为了 GET profile 
//访问这个URL 用的是： http://localhost/api/profile

profileRouter.get('/', getProfile);



//将profileRouter 导出
module.exports = profileRouter;