// Food data central
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const displayed_types = ['Protein', 'Total lipid (fat)', 'Carbohydrate, by difference', 
'Sugars, total including NLEA', 'Fiber, total dietary', 'Cholesterol', 'Fatty acids, total saturated', 'Fatty acids, total monounsaturated', 'Fatty acids, total polyunsaturated',
'Vitamin A, RAE', 'Vitamin E (alpha-tocopherol)', 'Vitamin D (D2 + D3)', 'Vitamin C, total ascorbic acid', 'Vitamin B-6', 'Vitamin B-12']

console.log(process.env.FOOD_CENTRAL_KEY);

let nutrients_types = {};

const processes = async (query) => {
    let nutrients = await axios.get("https://api.nal.usda.gov/fdc/v1/foods/search", {
        params: {
            api_key: process.env.FOOD_CENTRAL_KEY,
            query: query,
            pageSize: 1,
            pageNumber: 1
        }
    });
    general_info = nutrients.data.foods;
    console.log(general_info);
    if (general_info[0].finalFoodInputFoods.length != 0){
        console.log(general_info[0].finalFoodInputFoods[0].gramWeight); //Where to find gramWeight of total. Scale to input
    } else {
        console.log(general_info[0].servingSize, general_info[0].servingSizeUnit);
    }
    nutrients = nutrients.data.foods[0].foodNutrients;
    for (let i = 0; i < nutrients.length; i++){
        if (displayed_types.includes(nutrients[i].nutrientName)){
            nutrients_types[nutrients[i].nutrientName] = {amount: parseFloat(nutrients[i].value), unit: nutrients[i].unitName};
        }
    }
    console.log(nutrients_types);
    // return({totalWeight: general_info[0].finalFoodInputFoods[0].gramWeight})
}

processes("milk");