//require('dotenv').config();
const Logger = require('../utils/logger');

const template = (mainFunc) => async(req, res) => {
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
        res.status(400).send();
    }
};


module.exports = template