console.log("Ejecutando cliente JS...");

//-- Crear un websocket. Se establece la conexión con el servidor
const socket = io();

//-- Se ha recibido el evento 'hello':
//-- Es el mensaje de bienvenida del servidor 
socket.on('hello', (msg) => {
  console.log("Mensaje del servidor: " + msg);
});