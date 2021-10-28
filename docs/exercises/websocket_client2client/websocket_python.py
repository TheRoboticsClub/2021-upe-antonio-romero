from websocket_server import WebsocketServer


PORT=8080
respuesta= "Hola Antonio, soy el servidor de Python"  
# Called for every client connecting (after handshake)
def new_client(client, server):
	print("Cliente JS conectado con id %d" % client['id'])
	

# Called for every client disconnecting
def client_left(client, server):
	print("Client(%d) disconnected" % client['id'])


# Called when a client sends a message
def message_received(client, server, message):
    print("Cliente (%d): %s" % (client['id'], message))
    server.send_message_to_all(respuesta)
    print(respuesta)



server = WebsocketServer(port = PORT)
server.set_fn_new_client(new_client)
server.set_fn_client_left(client_left)
server.set_fn_message_received(message_received)
    
server.run_forever()


# Called when a client sends a message
def message_received(client, server, message):

	print("Cliente (%d): %s" % (client['id'], message))



