const {fridgePost, fridgeGet} = require("../services/fridge_operations");
const template = require('./template');

const fridgePostController = template(async(req) => {
    const result = await fridgePost(req.body);
    return(result);
}, 500);

const fridgeGetController = template(async(req) => {
    const result = await fridgeGet(req.body);
    return(result);
}, 500);

module.exports =  {
    fridgePostController,
    fridgeGetController
}