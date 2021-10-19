const express = require('express')


const app = express()


const http = require('http');

const server = http.createServer(app);


const io = require('socket.io')(server);

const PORT = 8080;


server.listen(PORT, function() {

    console.log('Server lanzado en puerto ' + PORT);


})


//pto de entrada en app



app.get('/', (req, res) => {

    let path = __dirname + '/chat-2.html';
    res.sendFile(path);
    console.log("Acceso a " + path);


});


app.get('/woala', (req, res) => {
    res.send("WOALA!");
    console.log("acceso a /woala");

});


app.use('/', express.static(__dirname + '/'));
