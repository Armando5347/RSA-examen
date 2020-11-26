const NodeRSA = require('node-rsa');
//Primero que nada esto

//Necesitamos estas dos llaves una para el server y la otra para los clientes
//Este es para el cliente
const pu = "-----BEGIN PUBLIC KEY-----"
+"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArfdel1cHtyR2/9Wzk5Jx"
+"GcCHwhEUr8x4+Lx7nhcB+YUC94YjAlaKB9aCQMrHpeSNdVn0JNmOtQTpBdY9Zv6r"
+"e0984T5kCAIJqSg+JakKEsss1GAPO6qVuKeHY6pK4qPgIrZcbdsnHP5e5otrOJRJ"
+"jKZIKUHiXJ03RnTtQmpVzi390qUpCJZoZCvnD2AN8FHvwXFtBj9Vw9e8aqTW7sym"
+"DWTK3+H1aOkOQ0UnhwWOdFoEyKOfiki/6a1263LZ/42dXUbMqhEtXJ+rqmtWkqF5"
+"NOPdyIKilBPzpRFSInhRyYxmucUwRsDonpP/fSOUCxLJw7mdcxQbZ1tBxQHcNrdO"
+"MwIDAQAB"
+"-----END PUBLIC KEY-----";
//Este es para el server
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

//Este es para el server
const pu2 = "-----BEGIN PUBLIC KEY-----"+
"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhxa4TJx2n8RlL+Vxb0lt"+
"jERycyUWS7wW0fymhiSnsbFLr+WFwKF436Z+GFWYso0t2U2XQ9MW+QU2a9j/KiLg"+
"R/irUcap7feWg7jGT3QpgKvpBBn52DTEl28LnzYr1QKLVnPssQmByUen93G2UhZ5"+
"1bRo9TzlaSM23eWBcNTRCcqkciBTUpmV1Wcuvcw4cSp6vO4u+kxjUkPdJ9dimB7i"+
"CWfGtkio1lLEcQAARa6ivKAISmkdYYafcR8XmEiysHNvRd7c/Y4Ow3UiskpTONhl"+
"u2whew05xZ95GmraUkDHAjwjo10AJwFaGj2I7zoXPW5+kLnaXmUFKhNTlXNmunrP"+
"MQIDAQAB"+
"-----END PUBLIC KEY-----";
//Este es para el cliente
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

/*
//necesitamos estas dos variables
const public = new NodeRSA();
const private = new NodeRSA();

//Necesitaremos estas dos cositas
public.importKey(pu);
private.importKey(pri);

//Esto es lo que incriptara el servidor
const en = private.encryptPrivate("hola", 'base64');
console.log(en);

//Esto es lo que desencriptara el cliente
const de = public.decryptPublic(en, 'utf8');
console.log(de);
*/
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