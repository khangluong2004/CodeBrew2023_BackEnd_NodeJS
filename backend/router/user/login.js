const {Router} = require('express');
const {loginController} = require('../../controller/accController');
const {validate_login} = require('../../middleware/validate_acc')

const login = Router();
login.post('/', validate_login, loginController);

module.exports = login;