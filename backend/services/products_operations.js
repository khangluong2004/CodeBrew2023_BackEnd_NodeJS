const {getAll} = require("../repositories/index");
const {products} = require("../model/index");
const {get_nutrients_per_gram} = require("../external_apis/nutrients");


const productList = async() => {
    const result = await getAll(products);
    return(result);
}

const productInfo = async({name, quantity, unit}) => { 
}
