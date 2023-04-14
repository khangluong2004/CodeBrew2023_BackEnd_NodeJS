const {Router} = require('express');
const {loginController} = require('../../../controller/accController');

const get_recipe = Router();
get_recipe.get('/', loginController);

module.exports = get_recipe;