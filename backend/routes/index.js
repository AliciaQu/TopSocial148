const express = require('express');

const axios = require('axios');

//将所有的路由都集中在这边；

//先导入一个 profile router 的实例

const profileRouter = require('./profile');
const requestRouter= require('./request');
const messageRouter = require('./message');
const highlineRouter = require('./highline');
const cardsRouter = require('./cards');

//创建一个总的router；
const router = express.Router();

//讲 子router挂载到总的router 上面；
router.use('/profile', profileRouter);
router.use('/request', requestRouter);
router.use('/message', messageRouter);
router.use('/highline', highlineRouter);
router.use('/cards', cardsRouter);
//先导出，免得之后会忘掉它；
module.exports = router;