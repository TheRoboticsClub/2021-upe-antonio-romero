
// Cargar el modulo

const express = require('express')


// Creacion de nueva aplicacion web

const app = express()


// Creacion del servidor.

const http = require('http').Server(app);

// Biblioteca socket.io en el lado del servidor

const io = require('socket.io')(http);


// Puerto de ejecucion

const PORT = 8080

// Lanzar servidor


function msg_console_start(){
    console.log('Servidor lanzado en puerto ' + PORT);

}

http.listen( PORT, msg_console_start() );


// Ptos de entrada de la app web

// Pag. principal

app.get( '/', (req, res)  => {

    let path = __dirname + '/chat-1.html';
    res.sendFile(path);

    console.log("Acceso a " + path);


});

//woala

app.get('/woala', (req, res) => {
    res.send('WOALA! Chuck Norris approved!! :-)');
    console.log("Acceso a /woala");
});



app.use('/', express.static(__dirname +'/'));