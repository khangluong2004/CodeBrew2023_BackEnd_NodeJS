const mongoose = require('mongoose');


const ChatRecipeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    ingredients: [{
        type: String
    }],
    instructions: {
        type: String
    },
    likes: Number
})


const ChatRecipe = mongoose.model('chat_recipes', ChatRecipeSchema);

module.exports = ChatRecipe;