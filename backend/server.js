const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const express = require('express');

const cors = require('cors');



//Connect db
require('./model/db');
//Start auto_admin server
// require('./process/auto_admin')


const Perspective = require('perspective-api-client');
const perspective = new Perspective({apiKey: process.env.PERSPECTIVE_API_KEY});

(async () => {
  const text = 'Fuck you!';
  const result = await perspective.analyze(text);
  console.log(JSON.stringify(result, null, 2));
})();

try {
    const app = express();
    const port = process.env.PORT || 3000;

    //Allow API call from the same local host
    const corsOptions ={
        origin: process.env.CROSS_ORIGIN, 
        credentials:true,            
        optionSuccessStatus:200
    }

    app.use(cors(corsOptions));
    //Parsing request body
    //JSON format
    app.use(bodyParser.json());
    //URL encoded format
    app.use(bodyParser.urlencoded({extended: true}));
    //Multipart form data
    app.use(upload.array());


    // app.use('/api', api_route);
    // app.use('/user', user_route);

    app.listen(port, '0.0.0.0', () => {
        console.log('Server is started on: ', port);
    });
    
} catch(e){
    console.log("Caught");
    console.log(e);
}