/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rsa.examen.sockets;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.InputStream;
import java.io.ObjectInputStream;
import java.io.OutputStream;
import java.net.Socket;
import java.util.ArrayList;
import javax.swing.JScrollPane;

/**
 *
 * @author maste
 */
class ProcesadorMensajes extends Thread{
    RSA rsa = new RSA(100, "servidor");
    ArrayList<Socket> clientes;
    ArrayList<Mensaje> mensajes;
    String mensaje;
    RSA rsaCliente;
    ProcesadorMensajes(ArrayList<Socket> clientes,ArrayList<Mensaje> mensajes) {
        this.clientes = clientes;
        //this.cliente = cliente;
        this.mensajes = mensajes;
        start();
        }
    @Override
    public void run(){
        for (Socket cliente : clientes) {
            try {
                InputStream is = cliente.getInputStream();
                ObjectInputStream oi = new ObjectInputStream(is);
                rsaCliente= (RSA) oi.readObject();
                String descifrado = rsa.desencriptar(rsaCliente.getCifrado(), rsaCliente.getD(), rsaCliente.getN());
                System.out.println("Mensaje en el descifrado: "+descifrado);
                Mensaje msj = new Mensaje(descifrado, rsaCliente.getUser());
                this.mensajes.add(msj);
                System.out.println("mjs: "+this.mensajes);
                oi.close();
                is.close();
                cliente.close();
            }catch(Exception e) {
                e.getMessage();
                e.printStackTrace();
            }
        }
    }

    public ArrayList<Mensaje> getMensajes() {
        return this.mensajes;
    }
   
}
