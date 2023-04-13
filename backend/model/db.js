//require('dotenv').config();
const mongoose = require('mongoose');
//Move uri to .env after finished
let uri;
if (process.env.NODE_ENV === "testing"){
    uri = process.env.MONGO_URI_TEST;
} else {
    uri = process.env.MONGO_URI;
}



try {
    mongoose.connect(uri , { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected"));
} catch(e){
    console.log(e)
}
