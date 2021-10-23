import socket

HEADER_BYTES = 64
FORMAT_LANG = 'utf-8'

PORT = 8080
SERVER = socket.gethostbyname(socket.gethostname())
ADDR = (SERVER, PORT)


client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)



client.connect(ADDR)


def send(msg):

    message = msg.encode(FORMAT_LANG)
    msg_length = len(message)
    send_length = str(msg_length).encode(FORMAT_LANG)
    send_length += b' '* (HEADER_BYTES - len(send_length))
    client.send(send_length)
    client.send(message)

send('HOLAAA')
