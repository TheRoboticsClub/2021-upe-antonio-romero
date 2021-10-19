//-- Cargar las dependencias
//-- Modulo express
const express = require('express')

//-- Crear una nueva aplciacion web
const app = express()

//-- Crear un servidor. Los mensajes recibidos
//-- los gestiona la app
const http = require('http').Server(app);

//-- Puerto donde lanzar el servidor
const PORT = 8080

//-- Lanzar servidor
http.listen(PORT, function(){
  console.log('Servidor lanzado en puerto ' + PORT);
});

//-------- PUNTOS DE ENTRADA DE LA APLICACION WEB
//-- Página principal
app.get('/', (req, res) => {
  res.send('Bienvenido a mi aplicación WEB!');
  console.log("Acceso a /");
});

//-- Otra vista
app.get('/woala', (req, res) => {
  res.send('WOALA! Chuck Norris approved!! :-)');
  console.log("Acceso a /woala");
});
