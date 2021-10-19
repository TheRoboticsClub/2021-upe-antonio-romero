console.log('ejecutando cliente JS...');


// obtiene los elementos del DOM 
// las etiquetas que están dentro del archivo es conocido como DOM (Document Object Model).
const display = document.getElementById("display");


const socket = io();

// se recibe evento hello
socket.on('hello', (msg) => {

    console.log('msg del servidor: ' + msg);

    //Ponerlo en parrafo display
    display.innerHTML = msg;


});


