const express = require('express');
//导入axios
const axios = require('axios');

//起名字为profileRouter

const profileRouter = express.Router();

//  我希望URL的样式： /api/profile 目的就是为了 GET profile 
//访问这个URL 用的是： http://localhost/api/profile

profileRouter.get('/api/profile', async function (req,res, next){
  try{
    const url = 'http://localhost:8000/profile';
    const response = await axios.get(url);
    console.log('response', response.data);
   res.status(200).json({
     msg: 'Get profile succeed',
     data:response.data,
    });
    // throw new Error('Server Error'); // 这个是错测试使用的
  } catch(error) {
    console.error('error', error);
    next(error);
  }
});



//将profileRouter 导出
module.exports = profileRouter;