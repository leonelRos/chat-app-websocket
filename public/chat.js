$(document).ready(function (){
    var socket = io.connect('http://localhost:3000')
    var username = $('#name');
    var change_username = $('#change_username');
    var messages = $('#feedback')
    var message = $('#message');
    var send_message = $('#send');

    send_message.click(function (){
        socket.emit('new_message', {message:message.val()})
    });
// function new message that we first passed in server.js
    socket.on('new_message', (data) => {
        console.log(message);
        messages.html('');
        message.val('');

        messages.html('<p>' + data.username + ":" + data.message + "</p>")
    })
})