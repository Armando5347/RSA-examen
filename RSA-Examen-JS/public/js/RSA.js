/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const bigint = require("big-integer");

let p, q, n;

let phi;

let e, d;

let tamPrimos = 100;

function init(){}{
    generarPrimos();
    generarClaves();
}

function generarPrimos(){
    p = bigInt();
    do{
        q = bigInt();
    }while(q.compare(p) === 0);
}
function generarClaves(){
    n = p.multiply(q);
    
    phi = p.subtract(bigInt.one); //p-1

    phi = phi.multiply(q.subtract(bigInt.one));
}

function encriptar(msj){
    let i;
   //arreglos
    let temp = new byte[1];
    let digitos = msj.getBytes();
    let bigdigitos = BigInt[digitos.length];
   //otro arreglo

    for(i = 0; i<bigdigitos.length; i++){
        temp[0] = digitos[i];
        bigdigitos[i] = temp;
    }

    let cifrado = new bigInt();
    for(i = 0; i<bigdigitos.length; i++){
        //ciframos
        cifrado[i] = bigdigitos[i].modPow(e, n);
    }

    return cifrado;
}

function desencriptar(cifrado, n ,d){
    
}