//require modules
const express = require('express');
// const path = require("path")

require('dotenv').config();
require('./config/database');



//create express app
const app = express();

const port = process.env.PORT || 3000;

//define a route directly on the app
app.set("view engine", "ejs")
app.use(express.static("public"));

app.get('/', (req,res) => {
    res.render('index')
})


//configure the app (app.set)

//mount midleware (app.use)

//mount routes

//tell the app to listen on port 3000
const server = app.listen(port, function(){
    console.log(`Express listening on port ${port}`)
});

const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log("a new client has been connected")
})



module.exports = app;