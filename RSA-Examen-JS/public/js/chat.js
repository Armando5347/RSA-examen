//iniciando y conectandose al server
const socket = io();

//Elementos del DOM
const text = document.getElementById("text");
const messages = document.getElementById("messages");
const btn = document.getElementById("btn-enviar");
const output = document.getElementById("messages");
const name = document.getElementById("user");

//Un script para hacer eso
btn.addEventListener('click', function () {
    //console.log(text.value);
    socket.emit('message', {
        username:name.value,
        msg:text.value
    });
    text.value = "";
});

socket.on('Mensajes', (data) => {
    output.innerHTML += '<div class="alert alert-info">'+
    '<strong>'+data.username+'</strong>: '+data.msg+
    '</div>';
});

