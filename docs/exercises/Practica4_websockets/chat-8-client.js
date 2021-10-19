console.log('Ejecutando cliente JS...');


const display = document.getElementById("display");

const display = document.getElementById("msg");

const send = document.getElementById("send");


const socket = io();


socket.on('hello', (msg) => {
    
    display.innerHTML = msg;

    console.log("msg del servidor : " + msg);

});


socket.on('msg', (msg) => {
    // Nuevo parrafo
    display.innerHTML += "<br> >" + msg;


});


send.onclick = () => {


    if(msg.value)

        socket.emit('msg', msg.value);


    msg.value ="";


}