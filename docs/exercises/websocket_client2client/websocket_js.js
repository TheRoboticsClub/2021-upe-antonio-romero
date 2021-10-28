    var ws;
    
    function init() {

      // Connect to Web Socket
      ws = new WebSocket("ws://localhost:8080/");

      // Set event handlers.
      ws.onopen = function() {
        output("Bienvenido");
      };
      
      ws.onmessage = function(e) {
        // e.data contains received string.
        output("mensaje externo: " + e.data);
      };
      
      ws.onclose = function() {
        output("onclose");
      };

      ws.onerror = function(e) {
        output("onerror");
        console.log(e)
      };

    }
    
    function onSubmit() {
  
      // You can send message to the Web Socket using ws.send.
      ws.send("Mensaje de Antonio");
      output("Mensaje de Antonio");

    }
    
    function onCloseClick() {
      ws.close();
    }
    
    function output(str) {
      var log = document.getElementById("log");
      var escaped = str.replace(/&/, "&amp;").replace(/</, "&lt;").
        replace(/>/, "&gt;").replace(/"/, "&quot;"); // "
      log.innerHTML = escaped + "<br>" + log.innerHTML;
    }