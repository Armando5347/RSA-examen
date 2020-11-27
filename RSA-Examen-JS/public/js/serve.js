//Este socket va a ser pasivo solo recibe y recibe
const socket = io();
const input = document.getElementById("inputs");


socket.on('Conectado', (data) => {
    console.log("Nuevo usuario conectado");
    input.innerHTML += '<div class="alert alert-light">'+
    '<strong>Nuevo Usuario conectado ID socket</strong>: '+data+
    '</div>';
});

socket.on('msg-enc', (data) => {
    console.log("Mensaje incriptado: ", data.msg);
    input.innerHTML += '<div class="alert alert-info">'+
    '<strong>Mensaje incriptado de '+data.user+'</strong>: '+data.msg+
    '</div>';
    input.innerHTML += '<div class="alert alert-danger">'+
    '<strong>Mensaje desincriptado de '+data.user+'</strong>: '+data.msgd+
    '</div>';
});
