const io = require('socket.io') (4000)

const users = {}

io.on('connetion', socket => {
    socket.on('new-user-joined', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name)
    })
    socket.on('send', message => {
        socket.broadcast.emit('recieve',{ message: message, name: users[socket.id]})
    })
})