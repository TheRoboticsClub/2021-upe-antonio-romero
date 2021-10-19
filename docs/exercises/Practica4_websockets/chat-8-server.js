

const express = require("express");


const app = express();


const http = require('http');

const server = http.Server(app);

const io = require('socket.io')(server);


const PORT = 8080;


server.listen(PORT, function(){
    console.log("Server lanzado en PORT " + PORT);
})

app.get('/', (req,res) => {
    
    let path = __dirname + '/chat-8.html';
    res.sendFile(path);
    console.log("Acceso a " + path);

    
});


app.use('/', express.static(__dirname + '/'));


io.on('connection', function(socket){


    console.log("--> Usuario conectado. Socket id: "+ socket.id);
    socket.emit("hello", "Bienvenido al chat");


    socket.on('msg', (msg) => {

        console.log("Cliente: " + socket.id + ': ' + msg);
        io.emit('msg', msg);
    });

    socket.on('disconnect', function(){

        console.log('--> Usuario desconectado. Socket id: ' + socket.id);
    });


});






