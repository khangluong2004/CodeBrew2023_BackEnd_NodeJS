const {Router} = require('express');
const {fridgePostController, fridgeGetController} = require('../../../controller/fridgeController');
const {authenticate} = require('../../../middleware/authen')

let fridge_route = Router();
fridge_route.post('/post', fridgePostController);
fridge_route.post('/get', fridgeGetController);

module.exports = fridge_route;