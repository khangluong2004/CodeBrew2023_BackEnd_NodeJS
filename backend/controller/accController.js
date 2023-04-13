import { login, register, validate_token, get_address } from '../services/acc_operations';
import template from './template';

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

const getAddressController = template(async(req) => {
    const address = get_address({username: req.query.username});
    return address
})

export default {
    loginController,
    registerController,
    validateTokenController,
    getAddressController
}