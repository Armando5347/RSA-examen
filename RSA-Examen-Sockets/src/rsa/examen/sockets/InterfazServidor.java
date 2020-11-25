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
import java.awt.Dimension;
import java.awt.Font;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.*;

class InterfazServidor extends Thread{
    JFrame ventana = new JFrame("Servidor");
    
    ServerSocket serversock;
    Socket cliente;
    
    ProcesadorMensajes procesador;
    ArrayList<Socket> clientes = new ArrayList<Socket>();
    JScrollPane p_msj = new JScrollPane();
    JPanel ptit = new JPanel();
    JPanel pbody = new JPanel();
    Font ft = new Font("Arial", Font.BOLD, 40);
    Font fst = new Font("Arial", Font.ITALIC, 30);
    Font fmsj = new Font("Arual", Font.PLAIN, 20);
    ArrayList<Mensaje> mensajes = new ArrayList<Mensaje>();
    int contadormsj = 0;
    
    @Override
    public void run(){
        try {
            serversock = new ServerSocket(8080);
            
           
            ventana.setMinimumSize(new Dimension(800,500));
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
               procesador = new ProcesadorMensajes(clientes, mensajes);
               System.out.println("Actualizando...");
               actualizarMesnajes();
           } catch (InterruptedException ex) {
               Logger.getLogger(InterfazServidor.class.getName()).log(Level.SEVERE, null, ex);
           }
       }
    }

    private void hacerHead() {
       JLabel titulo = new JLabel("Servidor de mensajes RSA");
       titulo.setFont(ft);
       ptit.add(titulo);
       ventana.add(ptit,BorderLayout.NORTH);
    }

    private void hacerBody() {
        JLabel subtit = new JLabel("Mensajes recibidos");
        subtit.setFont(new Font("Arial",Font.PLAIN, 30));
        pbody.setLayout(new BorderLayout(2,2));
        pbody.add(subtit);
        
        p_msj.setAlignmentX(0);
        p_msj.setLayout(new ScrollPaneLayout());
        p_msj.setVerticalScrollBarPolicy(ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED);
        pbody.add(p_msj, BorderLayout.CENTER);
        ventana.add(pbody, BorderLayout.CENTER);
    }

    private void actualizarMesnajes() {
        mensajes = procesador.getMensajes();
        System.out.println("Mesnajes: "+mensajes);
        p_msj.removeAll();
        for (int i = 0; i < mensajes.size(); i++) {
            Mensaje msj = mensajes.get(i);
            System.out.println("El mensaje en SI: " +msj.getMensaje());
            JTextField msj_input = new JTextField(msj.getMensaje());
            JLabel msj_tit = new JLabel(msj.getAutor());
            msj_tit.setFont(ft);
            msj_input.setFont(fmsj);
            msj_tit.repaint();
            msj_input.repaint();
            msj_tit.updateUI();
            msj_input.updateUI();
            p_msj.add(msj_tit);
            p_msj.add(msj_input);
            p_msj.repaint();
            p_msj.updateUI();
            
        }
    }
}
