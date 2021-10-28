

const ADDR = 172.0.0.1;



var websocket;





function ws_declaration(ws_address){
    
    ws = new WebSocket("ws://" + ws_address + ":8080/"); // sintaxis: webSocket = new WebSocket(url, protocols); (protocols es opcional)


    ws.onclose = function(event){

        

    }

}




