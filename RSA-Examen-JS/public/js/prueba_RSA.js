const NodeRSA = require('node-rsa');
const key = new NodeRSA();

//var public_k = key.generateKeyPair();
//console.log(public_k);

var k2 = new NodeRSA();

const publicDer = key.exportKey('pkcs8-public-der');
const privateDer = key.exportKey('pkcs1-der');
//De esta manera podemos enviar los valores necesarios para
//Realizar las incriptaciones de las dos partes
/*
key.importKey({
    n: public_k.n, //Valor de n
    e: public_k.e, //Valor de e
    d: public_k.d, //Valor de d
    p: public_k.p, //Valor de p
    q: public_k.q, //Valor de q
    dmp1: public_k.dmp1,
    dmq1: public_k.dmq1,
    coeff: public_k.coeff //Valor de phi
}, 'components');
//key.exportKey('pkcs1-der');

const text = 'Hello RSA!';
const encrypted = key.encrypt(text, 'base64');
console.log('encrypted: ', encrypted);
const decrypted = key.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);
console.log(k2.decrypt(encrypted, 'uft8'));*/