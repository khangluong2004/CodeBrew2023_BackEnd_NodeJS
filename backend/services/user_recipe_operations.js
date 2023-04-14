const {getOne, updateEntry} = require("../repositories/index");
const  {userRecipes} = require("../model/index");

const recipe_add_normal = async({username, ingredients, instructions}) => {
    try {
        let entry = await getOne(userRecipes, {username});
        entry.normal.unshift({
            ingredients,
            instructions
        });
        const updated = await updateEntry(userRecipes, {username}, entry);
        console.log(updated);
        return(true);
    } catch (e) {
        return(false);
    }
}

const recipe_add_online = async({username, image, sourceUrl, summary, pricePerServing}) => {
    try {
        let entry = await getOne(userRecipes, {username});
        entry.online.unshift({
            image,
            sourceUrl,
            summary,
            pricePerServing
        });
        const updated = await updateEntry(userRecipes, {username}, entry);
        console.log(updated);
        return(true);
    } catch (e) {
        return(false);
    }
}

const recipe_retrieve = async({username}) => {
    const entry = await getOne(userRecipes, {username});
    console.log({
        online: entry.online,
        normal: entry.normal
    });
    return({
        online: entry.online,
        normal: entry.normal
    });
}


module.exports = {
    recipe_add_normal,
    recipe_add_online,
    recipe_retrieve
}