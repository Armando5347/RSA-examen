//Este socket va a ser pasivo solo recibe y rebive
const socket = io();
const input = document.getElementById("inputs");


socket.on('Conectado', (data) => {
    console.log("Nuevo usuario conectado");
    input.innerHTML += '<div class="alert alert-info">'+
    '<strong>Nuevo Usuario conectado</strong>: '+data+
    '</div>';
});

socket.on('msg-enc', (data) => {
    console.log("Mensaje incriptado: ", data.msg);
    input.innerHTML += '<div class="alert alert-info">'+
    '<strong>Mensaje de: '+data.user+'</strong>: '+data.msg+
    '</div>';
});
