const {Router} = require('express');
const {registerController} = require('../../controller/accController');
const {validate_register} = require('../../middleware/validate_acc')

const register = Router();
register.post('/', validate_register, registerController);

module.exports = register;