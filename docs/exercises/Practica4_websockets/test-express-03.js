const express = require('express')

// -- Crear una app web

const app = express()

//-- Crear un servidor. 
// -- Los mensajes recibidos los gestiona la app

const http = require('http').Server(app)

const PORT = 8080

function msg(){

    console.log("Servidor lanzado en puerto --> " + PORT);

}

http.listen( PORT, msg() );

// -- PUNTOS DE ENTRADA DE LA APP WEB
// -- Main Page

app.get('/', (req, res) => {
    let fich = __dirname + '/index.html'; //__dirname contiene direccion path actual
    res.sendFile(fich);
    console.log("Acceso a " + fich);
})


// -- Otra visita

app.get('/woala', (req, res) => { 
    res.send(' WOALA!');
    console.log("Acceso a /woala");

});


