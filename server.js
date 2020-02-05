//require modules
const express = require('express');
// const path = require("path")

require('dotenv').config();
require('./config/database');



//create express app
const app = express();



const port = process.env.PORT || 3000;
//define a route directly on the app
app.use(express.static(__dirname));


//configure the app (app.set)

//mount midleware (app.use)

//mount routes

//tell the app to listen on port 3000
app.listen(port, function(){
    console.log(`Express listening on port ${port}`)
});



module.exports = app;