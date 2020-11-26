package rsa.examen.sockets;

import java.io.Serializable;
import java.util.*;
import java.math.BigInteger;
//import java.io.*;

public class RSA implements Serializable{

    //variables
    private String user;
    private int tamPrimo;
    private BigInteger p, q, n;
    private BigInteger phi;
    private BigInteger e, d;
    private String mensaje, descifrado;
    private BigInteger[] cifrado;
    //constructor de la clase
    public RSA(int tamPrimo, String user){
        this.tamPrimo = tamPrimo;
        this.user = user;
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
        this.mensaje = mensaje;
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
        this.cifrado = cifrado;
        return (this.cifrado);
    }

    //descifrar

    public String desencriptar(BigInteger[] cifrado, BigInteger bufd, BigInteger bufn){

        BigInteger[] descifrado = new BigInteger[cifrado.length];

        //primero tenemos que recorrerlo

        for(int i = 0; i<descifrado.length; i++){
            //aplicado el descifrado
            descifrado[i] = cifrado[i].modPow(bufd,bufn);
        }

        //vamos a necesitar un arreglo de caracteres para toda la informacion
        char[] charArray = new char[descifrado.length];

        for(int i = 0; i<charArray.length; i++){
            charArray[i] = (char)(descifrado[i].intValue()); 
        }
        this.descifrado = new String(charArray);
        return (this.descifrado);
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

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public String getDescifrado() {
        return descifrado;
    }

    public void setDescifrado(String descifrado) {
        this.descifrado = descifrado;
    }

    public BigInteger[] getCifrado() {
        return cifrado;
    }

    public void setCifrado(BigInteger[] cifrado) {
        this.cifrado = cifrado;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    
}


