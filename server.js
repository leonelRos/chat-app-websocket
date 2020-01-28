//require modules
const express = require('express');
const path = require('path');
const io = require('socket.io')();
//create express app
const app = express();

//define a route directly on the app
app.get('/', function(req,res){
    res.send(__dirname + '/home');
})

io.on('connection', function(socket) {
    socket.emit('news', {hello: 'world'});
    socket.on('my other event', function (data){
        console.log(data);
    });
});

app.get('/', function (req, res) {
    res.send('<h2>Hello Express</h2>');
});

app.get('/home', function(req, res){
    res.render('home');
});
//configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
//mount midleware (app.use)

//mount routes

//tell the app to listen on port 3000

app.listen(3000, function(){
    console.log('Listening on port 3000')
});