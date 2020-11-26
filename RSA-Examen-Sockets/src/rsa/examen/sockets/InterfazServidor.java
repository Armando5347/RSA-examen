/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rsa.examen.sockets;

/**
 *
 * @author maste
 */

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.io.IOException;
import java.io.InputStream;
import java.io.ObjectInputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.*;
import javax.swing.border.Border;

class InterfazServidor extends Thread{
    JFrame ventana = new JFrame("Servidor");
    
    ServerSocket serversock;
    Socket cliente;
    RSA rsa = new RSA(100, "Servidor");
    ProcesadorMensajes procesador;
    ArrayList<Socket> clientes = new ArrayList<Socket>();
    JPanel p_msj = new JPanel();
    JPanel ptit = new JPanel();
    JPanel pbody = new JPanel();
    Border borde = BorderFactory.createLineBorder(Color.black, 2);
    Font ft = new Font("Arial", Font.BOLD, 40);
    Font fst = new Font("Arial", Font.ITALIC, 30);
    Font fmsj = new Font("Arual", Font.PLAIN, 20);
    ArrayList<Mensaje> mensajes = new ArrayList<Mensaje>();
    int contadormsj = 0;
    
    @Override
    public void run(){
        try {
            serversock = new ServerSocket(8080);
            
           
            ventana.setMinimumSize(new Dimension(500,400));
            ventana.setLayout(new BorderLayout(5,5));
            ventana.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
             hacerHead();
            hacerBody();
            ventana.pack();
            ventana.setVisible(true);
            bucleSockets();
        } catch (IOException ex) {
            Logger.getLogger(InterfazServidor.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    private void bucleSockets() throws IOException {
       while(true){
            try {
               System.out.println("El while");
               Thread.sleep(2000);
               cliente = serversock.accept();
               clientes.add(cliente);
               //procesador = new ProcesadorMensajes(cliente, mensajes);
               InputStream is = cliente.getInputStream();
                ObjectInputStream oi = new ObjectInputStream(is);
                RSA rsaCliente= (RSA) oi.readObject();
                String descifrado = rsa.desencriptar(rsaCliente.getCifrado(), rsaCliente.getD(), rsaCliente.getN());
                System.out.println("Mensaje en el descifrado: "+descifrado);
                Mensaje msjb = new Mensaje(descifrado, rsaCliente.getUser());
                this.mensajes.add(msjb);
                System.out.println("mjs: "+this.mensajes);
                oi.close();
                is.close();
                System.out.println("Actualizando...");
                //actualizarMesnajes();
                //mensajes = procesador.getMensajes();
                System.out.println("Mesajes: "+mensajes);
                p_msj.removeAll();
                for (int i = 0; i < mensajes.size(); i++) {
                    Mensaje msj = mensajes.get(i);
                    System.out.println("El mensaje en SI: " +msj.getMensaje());
                    JTextField msj_input = new JTextField(msj.getMensaje());
                    JLabel msj_tit = new JLabel(msj.getAutor()+" dice:");
                    msj_tit.setFont(fst);
                    msj_input.setFont(fmsj);
                    msj_input.setEditable(false);
                    msj_input.setMaximumSize(new Dimension(800,30));
                    msj_tit.setMaximumSize(new Dimension(400,30));
                    msj_tit.repaint();
                    msj_input.repaint();
                    msj_tit.updateUI();
                    msj_input.updateUI();
                    p_msj.add(msj_tit);
                    p_msj.add(msj_input);
                    p_msj.repaint();
                    p_msj.updateUI();

                }
           } catch (InterruptedException ex) {
               Logger.getLogger(InterfazServidor.class.getName()).log(Level.SEVERE, null, ex);
           } catch (ClassNotFoundException ex) {
               Logger.getLogger(InterfazServidor.class.getName()).log(Level.SEVERE, null, ex);
           }
       }
    }

    private void hacerHead() {
       JLabel titulo = new JLabel("Servidor de mensajes RSA");
       titulo.setFont(ft);
       ptit.setBackground(Color.cyan);
       ptit.add(titulo);
       ptit.setBorder(borde);
       ventana.add(ptit,BorderLayout.NORTH);
    }

    private void hacerBody() {
        JLabel subtit = new JLabel("Mensajes recibidos");
        subtit.setFont(new Font("Arial",Font.PLAIN, 30));
        pbody.setLayout(new BorderLayout(2,2));
        pbody.add(subtit, BorderLayout.NORTH);
        pbody.setBorder(borde);
        p_msj.setAlignmentX(0);
        p_msj.setLayout(new BoxLayout(p_msj, BoxLayout.Y_AXIS));
        //p_msj.setVerticalScrollBarPolicy(ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED);
        pbody.add(p_msj, BorderLayout.CENTER);
        ventana.add(pbody, BorderLayout.CENTER);
    }

}
