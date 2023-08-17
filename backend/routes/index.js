const express = require('express');

const axios = require('axios');

//将所有的路由都集中在这边；

//先导入一个 profile router 的实例

const profileRouter = require('./profile');




//创建一个总的router；
const router = express.Router();

//讲 子router挂载到总的router 上面；
router.use(profileRouter);

//先导出，免得之后会忘掉它；
module.exports = router;