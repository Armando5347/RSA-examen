//iniciando y conectandose al server
const socket = io();

//Elementos del DOM
const text = document.getElementById("text");
const messages = document.getElementById("messages");
const btn = document.getElementById("btn-enviar");
const output = document.getElementById("messages");
const name = document.getElementById("user");

//RSA
/*
const NodeRSA = require('node-rsa'); 
const public = new NodeRSA();
const private2 = new NodeRSA();

//Este es para el cliente y solo el cliente pueda incriptar
const pri2 = "-----BEGIN RSA PRIVATE KEY-----"+
"MIIEogIBAAKCAQEAhxa4TJx2n8RlL+Vxb0ltjERycyUWS7wW0fymhiSnsbFLr+WF"+
"wKF436Z+GFWYso0t2U2XQ9MW+QU2a9j/KiLgR/irUcap7feWg7jGT3QpgKvpBBn5"+
"2DTEl28LnzYr1QKLVnPssQmByUen93G2UhZ51bRo9TzlaSM23eWBcNTRCcqkciBT"+
"UpmV1Wcuvcw4cSp6vO4u+kxjUkPdJ9dimB7iCWfGtkio1lLEcQAARa6ivKAISmkd"+
"YYafcR8XmEiysHNvRd7c/Y4Ow3UiskpTONhlu2whew05xZ95GmraUkDHAjwjo10A"+
"JwFaGj2I7zoXPW5+kLnaXmUFKhNTlXNmunrPMQIDAQABAoIBABSm2YgEx3HHUXzQ"+
"A9ZykEfIUwLdYZo0Z/y0NjT9t5FHvH1ohlkblmICjvZjZ5OsV50H6p8Yz0NEk7xL"+
"ET8807LNBkvbJjFWD3GVtuOAq7ObFGVnHzX5YzCPbmRpoKvQ1sJhuIacIHZH+Rqw"+
"DKJiA0Azc3RCWgQHuSSVKIO6VTa8xUPHf7RxOU1zlOt97QLXkcsemzMJxKhEGBvs"+
"tpSSpIm60PthaKOoT96HgtSlvAQg6YvIpFecVwhijgxKsS1R7oLnK5obv9cXqdDV"+
"GVetoA0ZRNTu6yVYZddNQEA9UrcHlB9xraB99BMX8M4f/x/geLOZPuIM3mgyel0T"+
"uhve410CgYEA3gctKw4NbSxYBsSmHEqYvbTlhfVpkOJaJFN2vxU89Bm/8RhxzSZv"+
"ufXyv9hxuNtZKp65elussvVfEe3PDeWP69e2BvgcKfdcW5DusfO0GPXxRqHXPrJ+"+
"2eCiuuKWRKAUUz/SSTavUDvlTEaDadATFSbNbw2gXyia/JbeLZwRhysCgYEAm8Ij"+
"LoD6fxv3kArcJrWXa45FXMHQdVOoz8zEiDB/u3zyMk/sRQ8/A0DwI61iGXxgPy7J"+
"KNRQq6QOJbymHef2p97zpoof5oNj2bGMBRr1CV+su6uotGsPx1/tfY4iX1FcWAp5"+
"fbmF+F1VwtP6LZIpV3mP9jSkcSNar5Ex39Ol1RMCgYAN2zDMcRIRcCUGNxuOxHEH"+
"1dRFKe2upxGtFrBgeHjXWwwJhdcEUJPEbT77Dgz61mWYLVOx+Sqr+Hg4bDjxyxPS"+
"SiIICU/oppFS/ZaH8Ieazy6Bk/QU65rTChvdwepS2hKqp17+RrVmMna67eOhpOSr"+
"+0Hy3kzV43jYrqmq+wR1BQKBgHXvtqHkqUeLjpTzlCR/RSr8a8rDOitMcDr/qiQQ"+
"zPbSsbSkzZqw4558EhiBlREFGv9cVpZixL5iFxA92m40kJAlgcmtNmBdRkK0a/gF"+
"pFo3plvnq3MIycbF/NYfxCj2Ovyy2bD3w9f+HAzMYtcUn9cLRZU/4O+FvInJX8FB"+
"yYQfAoGAJLCPwaK9dqIa59pvyGUSvX1i6l+3dsrmT1j5X3fyzGqWfZ5b9NqUKAD6"+
"teuv2fPw5RG5VPUv2whoSEM6bMLa40MNwlkVCP6MrgXLILpPy0WpCQTtuDhpxTQz"+
"QGH/PNso19OGvOoAzPfgujAtmWhuDfaJ9zPn+VC1qKZ0eu0pexE="+
"-----END RSA PRIVATE KEY-----";
//Este es para el cliente y el cliente solo pueda desincriptar
const pu = "-----BEGIN PUBLIC KEY-----"
+"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArfdel1cHtyR2/9Wzk5Jx"
+"GcCHwhEUr8x4+Lx7nhcB+YUC94YjAlaKB9aCQMrHpeSNdVn0JNmOtQTpBdY9Zv6r"
+"e0984T5kCAIJqSg+JakKEsss1GAPO6qVuKeHY6pK4qPgIrZcbdsnHP5e5otrOJRJ"
+"jKZIKUHiXJ03RnTtQmpVzi390qUpCJZoZCvnD2AN8FHvwXFtBj9Vw9e8aqTW7sym"
+"DWTK3+H1aOkOQ0UnhwWOdFoEyKOfiki/6a1263LZ/42dXUbMqhEtXJ+rqmtWkqF5"
+"NOPdyIKilBPzpRFSInhRyYxmucUwRsDonpP/fSOUCxLJw7mdcxQbZ1tBxQHcNrdO"
+"MwIDAQAB"
+"-----END PUBLIC KEY-----";

private2.importKey(pri2);
public.importKey(pu);
*/
/*
const public = new NodeRSA();
const pu = "-----BEGIN PUBLIC KEY-----"
+"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArfdel1cHtyR2/9Wzk5Jx"
+"GcCHwhEUr8x4+Lx7nhcB+YUC94YjAlaKB9aCQMrHpeSNdVn0JNmOtQTpBdY9Zv6r"
+"e0984T5kCAIJqSg+JakKEsss1GAPO6qVuKeHY6pK4qPgIrZcbdsnHP5e5otrOJRJ"
+"jKZIKUHiXJ03RnTtQmpVzi390qUpCJZoZCvnD2AN8FHvwXFtBj9Vw9e8aqTW7sym"
+"DWTK3+H1aOkOQ0UnhwWOdFoEyKOfiki/6a1263LZ/42dXUbMqhEtXJ+rqmtWkqF5"
+"NOPdyIKilBPzpRFSInhRyYxmucUwRsDonpP/fSOUCxLJw7mdcxQbZ1tBxQHcNrdO"
+"MwIDAQAB"
+"-----END PUBLIC KEY-----";
*/
//public.importKey(pu);

//Un script para hacer eso
btn.addEventListener('click', function () {
    //console.log(text.value);
    //var m = private2.encryptPrivate(text.value, 'base64');
    socket.emit('message', {
        username:name.value,
        msg:text.value
    });
    text.value = "";
});

socket.on('Mensajes', (data) => {
    //var md = public.decryptPublic(data.msg, 'utf8');
    output.innerHTML += '<div class="alert alert-info">'+
    '<strong>'+data.username+'</strong>: '+data.msg+
    '</div>';
});

socket.on('Conectado', (data) => {
    console.log("Nuevo usuario conectado");
    output.innerHTML += '<div class="alert alert-light">'+
    '<strong>Nuevo Usuario conectado ID socket</strong>: '+data+
    '</div>';
});

