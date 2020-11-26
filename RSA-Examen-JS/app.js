/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const path = require('path');
const express = require("express");
const app = express();

app.set('port', process.env.PORT || 3000);
//Enrutamiento
app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(app.get('port'), () =>  {
    console.log("Server funcionando en: ", app.get('port'));
});

const SocketIO = require('socket.io');
const io = SocketIO(server);

//RSA
const NodeRSA = require('node-rsa'); 
const key = new NodeRSA({b: 512});

//web sockets
io.on('connection', (socket) => {
    console.log("Nuevo usuario conectado", socket.id);
    io.emit('Conectado', socket.id);

    //CLientes recibiendo datos
    socket.on('message', (data) => {
        const text = data.msg;
        const encrypted = key.encrypt(text, 'base64');
        console.log('encrypted: ', encrypted);
        const decrypted = key.decrypt(encrypted, 'utf8');
        console.log('decrypted: ', decrypted);
        io.emit('Mensajes', data);
    });
});


