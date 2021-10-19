
const express = require('express')


const app = express()

const http = require('http');

const server = http.createServer(app);

const io = require('socket.io')(server);


const PORT = 8080;

function msg(){

    console.log('Servidor lanzado en puerto: ' + PORT);


}

server.listen( PORT, console.log('Servidor lanzado en puerto: ' + PORT) );


// pag principal

app.get('/' , (req, res) => {
// MODIFICACION RESPECTO AL SERVER ANTERIOR 5
    let path = __dirname + '/chat-6.html';
    res.sendFile(path);
    console.log('Acceso a ' + path);

    
} );


app.use('/' , express.static(__dirname + '/') );


//Comunicacion por websockets 
// evento: nueva conexion establecida
// nuevo usuario conectado


io.on('connection', function(socket){
    console.log('--> Usuario conectado: ' + socket.id + '(Socket ID)' );

    socket.emit('hello', "Bienvenido al chat");


    socket.on('disconnect', (msg) => {
        console.log("--> Usuario desconectado" + socket.id + '(Socket ID)')
    });

});


