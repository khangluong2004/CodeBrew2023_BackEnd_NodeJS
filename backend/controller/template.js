//require('dotenv').config();
const Logger = require('../utils/logger');

const template = (mainFunc, error_code = 400) => async(req, res) => {
    try {
        const val = await mainFunc(req);
        if (process.env.NODE_ENV !== "testing"){
            Logger.info(val);
        }
        res.status(201).send(val)
    } catch(e){
        if (process.env.NODE_ENV !== "testing"){
            Logger.error(e);
        }
        res.status(error_code).send();
    }
};


module.exports = template