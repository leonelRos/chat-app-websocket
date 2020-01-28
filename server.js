//require express
const express = require('express');
//create express app
const app = express();

//define a route directly on the app
app.get('/', function (req, res) {
    res.send('<h2>Hello world</h2>');
});



app.listen(3000, function(){
    console.log('Listening on port 3000')
});