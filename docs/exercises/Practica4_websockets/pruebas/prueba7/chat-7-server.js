const express = require('express');



const app = express();


const http = require('http');
const server = http.Server(app);


const io = require('socket.io')(server);


const PORT = 8080;


server.listen(8080, console.log('Servidor lanzado en puerto ' + PORT));

app.get('/', (req,res) => {

    let path = __dirname + '/chat-7.html';

    res.sendFile(path);

    console.log('Acceso a '+ path);

});


app.use('/', express.static(__dirname + '/'));

io.on('connection', function(socket){
    console.log('--> User connected: ' + socket.id + ' (socket id)');

    socket.emit('hello', "Welcome to the chat");

    socket.on('msg', (msg) => {
        console.log('Client: ' + socket.id + ': ' + msg);
    });



    socket.on('disconnect', function(){

        console.log('--> User disconnected: ' + socket.id + ' (socket id)');
    });

});