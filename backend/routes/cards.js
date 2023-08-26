const express = require('express');
const { getCardById, postCard, deleteCardById } = require('../controllers/cardsController');
const cardsRouter = express.Router();


//GET /api/cards ?id=1
cardsRouter.get('/', getCardById);



//POST /api/cards
cardsRouter.post('/', postCard);


//Delete  /api/cards/: card_id
cardsRouter.delete('/:card_id', deleteCardById);

module.exports = cardsRouter;

