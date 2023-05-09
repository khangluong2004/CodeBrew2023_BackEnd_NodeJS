const {create, getOne, updateEntry} = require("../repositories/index");
const  {Fridge} = require("../model/index");

const fridgePost = async({username, ingredients, expiry_date, quantity, measures}) => {   
    const check = await getOne(Fridge, {username});
    if (!check){
        await create(Fridge, {username, ingredients, expiry_date, quantity, measures})
    } else {
        ingredients = check.ingredients.concat(ingredients);
        expiry_date = check.expiry_date.concat(expiry_date);
        quantity = check.quantity.concat(quantity);
        measures = check.measures.concat(measures);
        await updateEntry(Fridge, {username}, {ingredients, expiry_date, quantity, measures});
    }
    return true; 
}

const fridgeGet = async({username}) => {
    const myFridge = await getOne(Fridge, {username});
    return(myFridge) 
}



module.exports = {
    fridgePost,
    fridgeGet
}