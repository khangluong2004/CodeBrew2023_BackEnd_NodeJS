const get_recipe = require('../external_apis/recipe');
const template = require('./template');

const recipeController = template(async(req) => {
    const result = await get_recipe(req.body);
    return {data: result};
}, 401);


module.exports =  {
    recipeController
}