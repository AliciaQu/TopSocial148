const axios = require('axios');

const getProfile =  async function (req,res, next){
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
};

module.exports = {getProfile};
