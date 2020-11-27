//Este socket va a ser pasivo solo recibe y recibe
const socket = io();
const input = document.getElementById("inputs");


socket.on('Conectado', (data) => {
    if (input.children.length > 4) {
        input.children[0].remove();
    }
    //console.log("Nuevo usuario conectado");
    input.innerHTML += '<div class="alert alert-light">'+
    '<strong>Nuevo Usuario conectado ID socket</strong>: '+data+
    '</div>';
});

socket.on('msg-enc', (data) => {
    if (input.children.length > 4) {
        input.children[0].remove();
        input.children[0].remove();
    }
    let tex = data.msg.split("");
    const regex = /[,]/gi;
    tex = tex.toString().replace(regex, ' ');
    //console.log("Mensaje incriptado: ", tex);
    input.innerHTML += '<div class="alert alert-info">'+
    '<strong>Mensaje incriptado de '+data.user+'</strong>: '+tex+
    '</div>';
    input.innerHTML += '<div class="alert alert-danger">'+
    '<strong>Mensaje desincriptado de '+data.user+'</strong>: '+data.msgd+
    '</div>';
});
