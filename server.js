//require modules
const express = require('express');

//create express app
const app = express();

//define a route directly on the app

app.use(express.static(__dirname));




//configure the app (app.set)

//mount midleware (app.use)

//mount routes

//tell the app to listen on port 3000

app.listen(3000, function(){
    console.log('Listening on port 3000')
});