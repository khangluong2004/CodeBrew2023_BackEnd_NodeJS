const mongoose = require('mongoose');


const ChatPostSchema = new mongoose.Schema({
    post: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    date: Date,
    likes: Number
})


const ChatPost = mongoose.model('chat_posts', ChatPostSchema);

module.exports = ChatPost;

// test = async() => {
//     for (let i = 0; i < list.length; i++){
//         let new_product = new Product({...list[i], brand: "Woolworth"});
//         await new_product.save();
//     }
//     console.log('done');
// }

// try{
//     test();
// }catch(e){
//     console.log(e);
// }
