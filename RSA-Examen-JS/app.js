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
const { deserialize } = require('v8');

//necesitamos estas dos variables

const public2 = new NodeRSA();
const private = new NodeRSA();
//Este es para que el server y solo el server incripte

const pri = "-----BEGIN RSA PRIVATE KEY-----"+
"MIIEogIBAAKCAQEArfdel1cHtyR2/9Wzk5JxGcCHwhEUr8x4+Lx7nhcB+YUC94Yj"+
"AlaKB9aCQMrHpeSNdVn0JNmOtQTpBdY9Zv6re0984T5kCAIJqSg+JakKEsss1GAP"+
"O6qVuKeHY6pK4qPgIrZcbdsnHP5e5otrOJRJjKZIKUHiXJ03RnTtQmpVzi390qUp"+
"CJZoZCvnD2AN8FHvwXFtBj9Vw9e8aqTW7symDWTK3+H1aOkOQ0UnhwWOdFoEyKOf"+
"iki/6a1263LZ/42dXUbMqhEtXJ+rqmtWkqF5NOPdyIKilBPzpRFSInhRyYxmucUw"+
"RsDonpP/fSOUCxLJw7mdcxQbZ1tBxQHcNrdOMwIDAQABAoIBAFP2BbMpD9I2STCk"+
"ZS0eCnQRVfQ15jQKjYAPB+J+3DcfGRV5qb/hIHEz+F1pAP5x1kwDBDAcyCFZo1Vr"+
"1uq0kvLKpEzZndG3mg4IHCZ09SWo5ZQCYJe9dtFOGavibo3/5ZcbSHTExpXZttey"+
"BieiefTl9AHliGiGgD0DBdd+FreQ8HVOxV7JRfANrOgy2Pp91Z7GraibC4HxEzI0"+
"XdB0KbR7l0vlMOQ5R8QKjP3wKoNZiMCclw+tfxXK+iqzXPwZ4BI2q79OtJFT43mj"+
"tdztNncWL0XwLnsdiAdkzZTaijnR1Yald3/vU5TbJJqr1gxgKPUuKHYkXeFD7rJe"+
"HE06o5ECgYEA+JFiRTcDQtlC+2oX0Vzg82q59bZ5UF59xzkX0M1E9Is/FVayG+Pr"+
"TfbTy3K2LLUdQwmgQ69WOETk3N0XwO5mBLdwK+j0uokGtKKl6m8gu93RvVMEkIcP"+
"L/e8EXX8o6/fi+Ewv9bPuDtbQXocVY6YD2nihLPIx4rb71WQvTMUPpUCgYEAsyr2"+
"LGfNerVvyL9DuiEB+SUZwEG7yjUoUZiBOS28QHfbo3Fa/5Bm2sEBB1HDbIgWWAbO"+
"+tPFnth8Iko0HyyFLEIBkqOpuyquRubSGdqrCqXIolgA/SiusB2Rbbm1AZth6eFH"+
"zth9BITWJozPU+qVMwgWBOIXBtRfd0qDLjxIz6cCgYBhVo1lDWX5h5rzWVh6ZCSz"+
"LdgkoJBhKJ+YpILvAXM/UEgj0w9sXJSIs1+9C+7LEyGiXuKjnsXkwxXcZ7gllTXe"+
"IveKOm+bnI1Dr23JoDrxVqwLt7bR4hHQdvLu44VLlFO2Mzkj5rrxKk1SFr+BwZVK"+
"c+yAiubVPUtjLd7AOIB1AQKBgFgdTdqC5nxt1N8OqZlVeGn2hBaYfWmyAPU4In1j"+
"b8zo5X0ZV56OfvcgqofV/11WBF8gYhTbp7o6T7pxcfbO52PfxnQ+x0/Eatd112hd"+
"sXbYF7c3vqzCoD7/G7Gx/kIfD+V9JNqmf72EMuncoG5t1Ri25lVad+ak9Zpua9uG"+
"TGzLAoGAdmLCZ+caBgeLx81xWqt5EVybzyZg0ivBTRU4DntkwRz5Hts0D3ZYDTpF"+
"S/+5SVVWzGwMefhw/4PVMXQoiZgemmxBboNESa/7lVBIYyVXxhiwEKlGIgi5BpAO"+
"5gkeU++PYCIvqUvCbF8ioLQJzYKno34VgsM8iE4TC2TK/Dkp1M4="+
"-----END RSA PRIVATE KEY-----";
//Este es para que el server y solo el server desincripte
const pu2 = "-----BEGIN PUBLIC KEY-----"+
"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhxa4TJx2n8RlL+Vxb0lt"+
"jERycyUWS7wW0fymhiSnsbFLr+WFwKF436Z+GFWYso0t2U2XQ9MW+QU2a9j/KiLg"+
"R/irUcap7feWg7jGT3QpgKvpBBn52DTEl28LnzYr1QKLVnPssQmByUen93G2UhZ5"+
"1bRo9TzlaSM23eWBcNTRCcqkciBTUpmV1Wcuvcw4cSp6vO4u+kxjUkPdJ9dimB7i"+
"CWfGtkio1lLEcQAARa6ivKAISmkdYYafcR8XmEiysHNvRd7c/Y4Ow3UiskpTONhl"+
"u2whew05xZ95GmraUkDHAjwjo10AJwFaGj2I7zoXPW5+kLnaXmUFKhNTlXNmunrP"+
"MQIDAQAB"+
"-----END PUBLIC KEY-----";

//Necesitaremos estas dos cositas
public2.importKey(pu2);
private.importKey(pri);

//web sockets
io.on('connection', (socket) => {
    console.log("Nuevo usuario conectado", socket.id);
    io.emit('Conectado', socket.id);

    //CLientes recibiendo datos
    socket.on('message', (data) => {
        const text = public2.decryptPublic(data.msg, 'utf8');
        const encrypted = private.encryptPrivate(text, 'base64');
        //Desincriptarlo con la publica
        io.emit('Mensajes', {
            msg:encrypted,
            username:data.username
        });
        io.emit('msg-enc', {
            msg:encrypted,
            msgd:text,
            user:data.username
        });
    });
});


