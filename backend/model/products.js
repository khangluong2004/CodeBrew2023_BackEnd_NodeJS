//Load .env variables
//require('dotenv').config();
const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number
    },
    unit: {
        type: String,
        uppercase: true
    },
    brand: {
        type: String,
        uppercase: true
    }
})


const Product = mongoose.model('products', ProductSchema);

module.exports = Product;

// test = async() => {
//     const new_product = new Product({
//         product: "chicken",
//         price: 12.5,
//         quantity: 1,
//         unit: "kg",
//         brand: "Woolworth"
//     })
//     const new_product1 = new Product({
//         product: "milk",
//         price: 2.5,
//         quantity: 100,
//         unit: "ml",
//         brand: "Woolworth"
//     })
//     const new_product2 = new Product({
//         product: "orange juice",
//         price: 1,
//         quantity: 100,
//         unit: "ml",
//         brand: "Woolworth"
//     })
//     await new_product.save(); 
//     await new_product1.save(); 
//     await new_product2.save(); 
//     console.log('done');
// }

// try{
//     test();
// }catch(e){
//     console.log(e);
// }