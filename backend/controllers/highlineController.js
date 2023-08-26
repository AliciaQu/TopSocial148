const axios = require('axios');

const getHighline = async function(req,res,next) {
 try {
   const url = 'http://localhost:8000/highline';
   const response = await axios.get(url);
   res.status(200).json({
    msg: ' get highline succeed',
    data: {
      highline: response.data,
    },
   });
  
 } catch (error) {
  next(error);
 }
};
module.exports={getHighline};