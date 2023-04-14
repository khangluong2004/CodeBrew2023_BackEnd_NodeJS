const {Router} = require('express');
const recipe = require('./recipe/search_recipe');

const route = Router();

route.use('/recipe', recipe);

module.exports = route;