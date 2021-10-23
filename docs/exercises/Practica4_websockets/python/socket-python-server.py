import socket
import threading

PORT = 8080
#Busca direccion del ipv4
SERVER = socket.gethostbyname( socket.gethostname() )
print(SERVER)
ADDR = (SERVER, PORT)

HEADER_BYTES = 64
LANG_FORMAT = 'utf-8'
DISCONNECT = "!Desconectar"


#AF_IFNET comunica el tipo de ip que busca el socket
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)


server.bind(ADDR)



def handle_client(conn, addr):
    print('[NUEVA CONEXION] ' + addr)
    connected = True
    while connected:
        msg = conn.recv(HEADER_BYTES).decode(LANG_FORMAT)
        msg = int(msg)
        msg = conn.recv(msg).decode(LANG_FORMAT)
        #recibe info server.accept()
        # recv(NUMERO DE BYTES A ACEPTAR DEL CLIENTE)
        if msg == DISCONNECT:
            connected = False
        print(addr + '--> ' + msg)
    conn.close()

def start():
    server.listen()
    print('[RASTREANDO ENTRADAS]')
    while True:
        conn, addr = server.accept()
        thread = threading.Thread(target = handle_client, args = (conn, addr))
        thread.start()
        print(f"[CONEXIONES ACTIVAS] {threading.activeCount() - 1}")


print("[INICIANDO SERVIDOR...]")
start()