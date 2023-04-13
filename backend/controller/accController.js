const { login, register, validate_token } = require('../services/acc_operations');
const template = require('./template');

const registerController = template(async(req) => {
    await register(req.body);
    return true;
})

const loginController = template(async(req) => {
    const token = await login(req.body);
    return token;
})

const validateTokenController = template(async(req) => {
    const valid = await validate_token(req.body.token);
    return valid
})



module.exports =  {
    loginController,
    registerController,
    validateTokenController
}