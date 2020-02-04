//require modules
const express = require('express');
const path = require("path")
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
//create express app
const app = express();
require('dotenv').config();
require('/')
const db = mongoose.connection;
const port = process.env.PORT || 3000;
//define a route directly on the app
app.use(express.static(__dirname));


//configure the app (app.set)

//mount midleware (app.use)

//mount routes

//tell the app to listen on port 3000
db.once('connected', () => {
    console.log(`connected to MongoDB ${db.name} at ${db.host}:${db.port}` )
});

app.listen(port, function(){
    console.log(`Express listening on port ${port}`)
});