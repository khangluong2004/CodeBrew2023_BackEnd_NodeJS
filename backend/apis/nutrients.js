// Food data central
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();



console.log(process.env.FOOD_CENTRAL_KEY);

let nutrients_types = {};
let types_only = [];

const processes = async () => {
    let nutrients = await axios.get("https://api.nal.usda.gov/fdc/v1/foods/search", {
        params: {
            api_key: process.env.FOOD_CENTRAL_KEY,
            query: "Chicken Breast Australia",
            pageSize: 1,
            pageNumber: 1
        }
    });
    general_info = nutrients.data.foods;
    // console.log(general_info);
    // console.log(general_info[0].finalFoodInputFoods); Where to find gramWeight of total. Scale to input
    nutrients = nutrients.data.foods[0].foodNutrients;
    for (let i = 0; i < nutrients.length; i++){
        nutrients_types[nutrients[i].nutrientName] = {amount: parseFloat(nutrients[i].value), unit: nutrients[i].unitName};
        types_only.push([nutrients[i].nutrientName, nutrients[i].unitName]);
    }
    console.log(nutrients_types);
    // console.log(types_only);
}

processes();