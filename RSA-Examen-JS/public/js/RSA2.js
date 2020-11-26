const bigInt = require("big-integer");

//let p, q, n = bigInt();
let p = bigInt();
let phi = bigInt();
let n = bigInt();
let q = bigInt();
let e = bigInt();
let d = bigInt();
let tamPrimos = 100;

init();

function init() {
    generarPrim();
    generarClaves();
    let m = encriptar("HOLA");
    console.log(m);
    let md = desencriptar(m);
    console.log(md);
}

function numAle() {
    return parseInt(Math.random() * (10 - 0) + 0);
}

function generarPrim() {
    var numAl = "";
    for (let i = 0; i < tamPrimos; i++) {
        numAl += numAle();
    }
    p = bigInt(numAl);
    numAl = "";
    for (let i = 0; i < tamPrimos; i++) {
        numAl += numAle();
    }
    console.log(numAl)
    q = bigInt(numAl);
    /*
    while (p.compare(q)) {
        numAl = "";
        for (let i = 0; i < tamPrimos; i++) {
            numAl += numAle();
        }
        q = bigInt(numAl);
    }*/

    //Ok aqui ya tenemos a p y q
}

function generarClaves() {
    n = p.multiply(q);
    phi = p.subtract(bigInt().valueOf(1));
    phi = phi.multiply(q.subtract(bigInt().valueOf(1)));
    /*
    do {
    } while (((e.compareTo(phi))!= -1) || (bigInt.gcd(e, phi).compareTo(bigInt.valueOf(1)!=0)));
    */
   const areCoprimes = (num1, num2) => {
    const smaller = num1 > num2 ? num1 : num2;
        for(let ind = 2; ind < smaller; ind++){
            const condition1 = num1 % ind === 0;
            const condition2 = num2 % ind === 0;
            if(condition1 && condition2){
                return false;
            };
        };
        return true;
    };
    do {
        numAl = "";
        for (let i = 0; i < tamPrimos*2; i++) {
            numAl += numAle();
        }
        e = bigInt(numAl);
    } while (areCoprimes(e, phi));
    console.log(e);
    d = e.modInv(phi);
    console.log(d);
    //EN teoria ya estan las claves
}

function toUTF8Array(str) {
    let utf8 = [];
    for (let i = 0; i < str.length; i++) {
        let charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6),
                      0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12),
                      0x80 | ((charcode>>6) & 0x3f),
                      0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + (((charcode & 0x3ff)<<10)
                      | (str.charCodeAt(i) & 0x3ff));
            utf8.push(0xf0 | (charcode >>18),
                      0x80 | ((charcode>>12) & 0x3f),
                      0x80 | ((charcode>>6) & 0x3f),
                      0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
}

function encriptar(mensaje) {
    var digitos = [];
    //byte[] temp = new byte[1];
    digitos = toUTF8Array(mensaje);
    let bigDig = [];
    for (let i = 0; i < digitos.length; i++) {
        bigDig[i] = bigInt(digitos[i]);
    }

    let cifrado = [];

    for (let i = 0; i < bigDig.length; i++) {
        cifrado[i] = bigDig[i].modPow(e, n);
    }

    return cifrado;
}

function desencriptar(msj_cifrado) {
    let descifrado = [];
    for (let i = 0; i < msj_cifrado.length; i++) {
        descifrado[i] = msj_cifrado[i].modPow(d, n);
    }

    let charArr = [];
    for (let i = 0; i < descifrado.length; i++) {
        charArr[i] = descifrado[i]
    }

    return charArr.toString();
}



