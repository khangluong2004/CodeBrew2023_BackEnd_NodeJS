const {getAll} = require("../repositories/index");
const {products} = require("../model/index");


const productList = async() => {
    const result = await getAll(products);
    return(result);
}

// const productInfo = async({name, quantity}) => { 
// }
