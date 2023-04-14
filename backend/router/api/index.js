const {Router} = require('express');
const recipe = require('./recipe/search_add_and_retrieve');
const products = require('./products/products_route');

const route = Router();

route.use('/recipe', recipe);
route.use('/products', products);

module.exports = route;