const {create, getOne, getAll, updateEntry} = require("../repositories/index");
const  {chatPost, chatRecipe} = require("../model/index");
const {check_toxic} = require("../external_apis/perspective")

const chat_post = async({username, name, post, date, likes}) => {
    const result = await check_toxic(post);
    if (result > 0.6){
        return false;
    }
    
    const check = await getOne(chatPost, {username, name, post, date, likes});
    if (!check){
        await create(chatPost, {username, name, post, date, likes})
    } else {
        await updateEntry(chatPost, {username, name, post, date}, {username, name, post, date, likes});
    }
    return true; 
    
}

const chat_recipe_post = async({username, name, ingredients, instructions, date, likes}) => {
    const result = await check_toxic(instructions);
    if (result > 0.6){
        return false;
    }
    
    const check = await getOne(chatRecipe, {username, name, ingredients, instructions, date, likes});
    if (!check){
        await create(chatRecipe, {username, name, ingredients, instructions, date, likes})
    } else {
        await updateEntry(chatRecipe, {username, name, ingredients, instructions, date}, {username, name, ingredients, instructions, date, likes});
    }
    return true; 
}

const chat_retrieve_post = async() => {
    const all = await getAll(chatPost);
    return(all) 
}

const chat_retrieve_recipe = async() => {
    const all = await getAll(chatRecipe);
    return(all) 
}

module.exports = {
    chat_post,
    chat_recipe_post,
    chat_retrieve_post,
    chat_retrieve_recipe
}