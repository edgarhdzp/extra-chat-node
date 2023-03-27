const express = require('express')
const http = require('http')
const {Server} = require('socket.io')

const app = express()

const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    socket.on('chat', msg => {
        io.emit('chat', msg)
    })
})

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/front/index.html`)
})

server.listen(3000, () => {
    console.log('servidor corriendo en el puerto 3000')
})