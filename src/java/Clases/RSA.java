package Clases;

import java.util.*;
import java.math.BigInteger;
//import java.io.*;

public class RSA{

    //variables
    private int tamPrimo;
    private BigInteger p, q, n;
    private BigInteger phi;
    private BigInteger e, d;

    //constructor de la clase
    public RSA(int tamPrimo){
        this.tamPrimo = tamPrimo;
        generarPrimos();
        generarClaves();
    }

    //generar los primos
    private void generarPrimos(){
        p = new BigInteger(tamPrimo, 10, new Random());
        do q = new BigInteger(tamPrimo, 10, new Random());
            while(q.compareTo(p)==0);

        //wiii ya tengo mis numerotes 
    }

    //vamos a generar las claves
    private void generarClaves(){
        // n = p*q

        n = p.multiply(q);

        //phi = (p-1)*(q-1)

        phi = p.subtract(BigInteger.valueOf(1)); //p-1

        phi = phi.multiply(q.subtract(BigInteger.valueOf(1)));

        //ahora hay que calcular el coprimo para e a partir del mcd

        do e = new BigInteger(2*tamPrimo, new Random());
            while((e.compareTo(phi)!= -1) || (e.gcd(phi).compareTo(BigInteger.valueOf(1))!=0));
        
            //calcular a d = e^ 1 mod(phi)
        d = e.modInverse(phi);



    }


    //cifrar

    public BigInteger[] encriptar(String mensaje){
        //variables
        int i; 
        byte[] temp = new byte[1];
        byte[] digitos = mensaje.getBytes();
        BigInteger[] bigdigitos = new BigInteger[digitos.length];

        //lo primero es recorrer a bigdigitos para integrarlos al temporal
        for(i = 0; i<bigdigitos.length; i++){
            temp[0] = digitos[i];
            bigdigitos[i] = new BigInteger (temp);
        }

        BigInteger[] cifrado = new BigInteger[bigdigitos.length];

        //ahora que se el tamaño vamos a cifrarlo
        for(i = 0; i<bigdigitos.length; i++){
            //ciframos
            cifrado[i] = bigdigitos[i].modPow(e, n);
        }

        return (cifrado);
    }

    //descifrar

    public String desencriptar(BigInteger[] cifrado){

        BigInteger[] descifrado = new BigInteger[cifrado.length];

        //primero tenemos que recorrerlo

        for(int i = 0; i<descifrado.length; i++){
            //aplicado el descifrado
            descifrado[i] = cifrado[i].modPow(d,n);
        }

        //vamos a necesitar un arreglo de caracteres para toda la informacion
        char[] charArray = new char[descifrado.length];

        for(int i = 0; i<charArray.length; i++){
            charArray[i] = (char)(descifrado[i].intValue()); 
        }
        return (new String(charArray));
    }

    public int getTamPrimo() {
        return tamPrimo;
    }

    public void setTamPrimo(int tamPrimo) {
        this.tamPrimo = tamPrimo;
    }

    public BigInteger getP() {
        return p;
    }

    public void setP(BigInteger p) {
        this.p = p;
    }

    public BigInteger getQ() {
        return q;
    }

    public void setQ(BigInteger q) {
        this.q = q;
    }

    public BigInteger getN() {
        return n;
    }

    public void setN(BigInteger n) {
        this.n = n;
    }

    public BigInteger getPhi() {
        return phi;
    }

    public void setPhi(BigInteger phi) {
        this.phi = phi;
    }

    public BigInteger getE() {
        return e;
    }

    public void setE(BigInteger e) {
        this.e = e;
    }

    public BigInteger getD() {
        return d;
    }

    public void setD(BigInteger d) {
        this.d = d;
    }

    
}


