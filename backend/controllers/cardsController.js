const axios = require('axios');

const CARDS_API_URL = 'http://localhost:8000/cards';

const getCardById = async function(req,res,next) {
  const {id} = req.query;
  console.log('id',id);
  if (!id) { //做判断，有可能id 没有pass 过来;
    return res.status (400).send('Id is required'); //4 大头的是client 这边的error
   }//通过json server 拿这张Card；
  try {
   const cardResponse = await axios.get(`${CARDS_API_URL}?id=${id}`);
   const card = cardResponse.data;
   console.log('card',card);  
    if(!card.length){
   return res.status (404).json({
     msg:'Card not found',
   });
 }
 //throw new Error('server error'); //如果没有card,就throw 一个error
   res.status(200).json({ //如果有response 的情况下
   msg:'Get card succeed',
   data:card,
    });
  } catch (error) {
    next(error);//如果有error,pass 给 cards middleware
  }
};

const postCard = async function(req,res,next){
  const newCard = req.body;
  console.log('newCard', newCard); //拿到newCard
if(Object.keys(newCard).length ===0) {
  return res.status(400).send('Card is required');
}
try {
  await axios.post(CARDS_API_URL,newCard, {
    headers: {'Content-Type': 'application/json'},//存好这张card，然后返回
  });
  res.status(200).json({
   msg: "Card is created",
  });
} catch (error) {
  next(error);
}
}; //有很多方法判断这个object是否为空


const deleteCardById = async function (req,res,next) {
  const id = req.params.card_id;
  if(!id){
    return res.status(400).send('Id is required');
  }
try { // 到 Json server 里面去删除这张card
  await axios.delete(`${CARDS_API_URL}/${id}`);//call Json server去delete这张card
  res.status(200).json({
  msg: "Card is deleted",
  });
} catch (error) {
  next(error);
  }
};

module.exports= {getCardById,postCard,deleteCardById};//将postCard也导出去