//-- Cargar las dependencias
//-- Modulo express
const express = require('express')

//-- Crear una nueva aplciacion web
const app = express()

//-- Crear un servidor. Los mensajes recibidos
//-- los gestiona la app
const http = require('http').Server(app);

//-- Biblioteca socket.io en el lado del servidor
const io = require('socket.io')(http);

//-- Puerto donde lanzar el servidor
const PORT = 8080

//-- Lanzar servidor
http.listen(PORT, function(){
  console.log('Servidor lanzado en puerto ' + PORT);
});

//-------- PUNTOS DE ENTRADA DE LA APLICACION WEB
//-- Página principal
app.get('/', (req, res) => {
  let path = __dirname + '/chat-7.html';
  res.sendFile(path);
  console.log("Acceso a " + path);
});

//-- Otra vista de prueba
app.get('/woala', (req, res) => {
  res.send('WOALA! Chuck Norris approved!! :-)');
  console.log("Acceso a /woala");
});

//-- El resto de peticiones se interpretan como
//-- ficheros estáticos
app.use('/', express.static(__dirname +'/'));

//------ COMUNICACION POR WEBSOCKETS
//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado!
io.on('connection', function(socket){

  //-- Usuario conectado. Imprimir el identificador de su socket
  console.log('--> Usuario conectado!. Socket id: ' + socket.id);

  //-- Le damos la bienvenida a través del evento 'hello'
  //-- ESte evento lo hemos creado nosotros para nuestro chat
  socket.emit('hello', "Bienvenido al Chat");

  //-- Función de retrollamada de mensaje recibido del cliente
  socket.on('msg', (msg) => {
    console.log("Cliente: " + socket.id + ': ' + msg);
  })

  //-- Usuario desconectado. Imprimir el identificador de su socket
  socket.on('disconnect', function(){
    console.log('--> Usuario Desconectado. Socket id: ' + socket.id);
  });
});
