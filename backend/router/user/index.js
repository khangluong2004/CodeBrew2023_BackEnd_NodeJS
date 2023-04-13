const {Router} = require('express');
const login = require('./login');
const register = require('./register');
const validate_token = require('./validate_token');
const get_add = require('./get_address');

const route = Router();

route.use('/login', login);
route.use('/register', register);
route.use('/validate_token', validate_token);
route.use('/get_address', get_add);

module.exports = route;