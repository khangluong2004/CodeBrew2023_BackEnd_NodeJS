const mongoose = require('mongoose');


const FridgeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    ingredients: [{
        type: String,
    }],
    expiry_date: [{
        type: Date,
    }],
    quantity: [{
        type: Number,
    }],
    measures: [{
        type: String,
    }]
})


const Fridge = mongoose.model('myFridge', FridgeSchema);

module.exports = Fridge;

// test = async() => {
//     const new_Fridge = new Fridge({
//         username: "CodeBruh",
//         ingredients: ["Woolworths Full Cream Milk", "Woolworths Rspca Approved Chicken Giblets"],
//         expiry_date: ["2023-05-29", "2023-06-29"],
//         quantity: [10, 600],
//         measures: ["L", "g"]
//     })
//     await new_Fridge.save(); 
//     console.log('done fridge');
// }

// try{
//     test();
// }catch(e){
//     console.log(e);
// }