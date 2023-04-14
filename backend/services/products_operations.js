const {getAll} = require("../repositories/index");
const {products} = require("../model/index");
const {get_nutrients_per_gram} = require("../external_apis/nutrients");


const productList = async() => {
    const result = await getAll(products);
    return(result);
}

const productInfo = async({name, quantity}) => {
     //Assume unit is in gram
    const result = await get_nutrients_per_gram(name, quantity);
    return(result);
}

module.exports = {
    productList,
    productInfo
}