console.log('Ejecutando cliente JS...');


const display = document.getElementById("display");

const msg = document.getElementById("msg");

const send = document.getElementById("send");


const socket= io();


socket.on('hello', (msg) => {

    console.log("msg del servidor: " + msg);

    display.innerHTML = msg;
    


});


send.onclick = () => {
    //Se envia mensaje escrito
    //'msg' para los mensajes de usuario
    // Solo se envia si se ha introducido un mensaje
    if (msg.value)
        socket.emit('msg', msg.value);

    //borrado de mensaje escrito, valor nulo
    msg.value = "";

}