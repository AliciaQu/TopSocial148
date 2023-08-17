const handleErrors = function (err, req,res,next){
  console.error(err.stack); //方便我们做debugging
  const statusCode =err.statusCode || 500; //如果没有statusCode，就默认500
  const message = err.message || 'Internal server error'; //如果没有message，就默认Internal 
  res.status(statusCode).json ({error:message}) // response 给前端,这个statusCode 肯定是个错误的；
};
//导出
module.exports = {handleErrors};