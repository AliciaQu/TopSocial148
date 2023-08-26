const axios = require('axios');

const getRequest = async function(req,res,next) {
  try{
   const url = 'http://localhost:8000/request';
   const request = await axios.get(url);
   res.status(200).json({//如果成功拿到数据，就返回一个json格式的数据；
   msg:'get request succeed',
   data: request.data,
  });
  } catch (error){
    next(error)

  }
};

module.exports = {getRequest};