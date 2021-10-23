import socketio


sio = socketio.Client()

sio.connect('http://localhost:8080')



@sio.on('my message')
def on_message(data):
    print('I received a message!')



@sio.on('connect', namespace='/')
def on_connect():
    print("I'm connected to the /chat namespace!")
    sio.emit('my message', {'foo': 'bar'}, namespace='/')


@sio.event
def connect():
    print("I'm connected!")

@sio.event
def connect_error(data):
    print("The connection failed!")

@sio.event
def disconnect():
    print("I'm disconnected!")



sio.emit('msg', 'holaaaaa', namespace='/')
print('eeey')
sio.wait()