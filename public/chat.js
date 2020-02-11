$(document).ready(function (){
    var socket = io.connect('http://localhost:3000')
    var username = $('#name');
    var change_username = $('#change_username');
    var messages = $('#messages')
    var message = $('#message');
    var send_message = $('#send');

    send.click(function (){
        socket.emit('new_message', {message:message.val()})
    });

    socket.on('new_message', (data) => {

    })
})