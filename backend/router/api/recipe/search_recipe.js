const {Router} = require('express');
const {recipeController} = require('../../../controller/recipeController');
const {authenticate} = require('../../../middleware/authen')

let search_recipe = Router();
search_recipe.post('/search', authenticate, recipeController);

module.exports = search_recipe;