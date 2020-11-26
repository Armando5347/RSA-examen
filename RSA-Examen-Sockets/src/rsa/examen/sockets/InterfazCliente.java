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
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.io.Serializable;
import java.net.Socket;
import java.net.SocketException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.*;
import javax.swing.border.Border;
class InterfazCliente  extends Thread implements Serializable{
    JFrame ventana = new JFrame("Usuario");
    JLabel titulo;
    JPanel body = new JPanel();
    JPanel tit = new JPanel();
    Socket cliente;
    JButton enviar = new JButton("Enviar mensaje");
    String user = "";
    JTextField msj = new JTextField();
    Font ft = new Font("Arial", Font.BOLD, 40);
    Font fst = new Font("Arial", Font.ITALIC, 30);
    Font fmsj = new Font("Arual", Font.PLAIN, 20);
    RSA rsa;
    Border borde = BorderFactory.createLineBorder(Color.black, 2);
    @Override
    public void run(){
        try {
            do{
                user = JOptionPane.showInputDialog(null, "Ingrese su nombre");
            }while("".equals(user));
            cliente = new Socket ("187.202.60.164", 8080);
            rsa = new RSA(100,user);
            
            ventana.setMinimumSize(new Dimension(400,300));
            ventana.setLayout(new BorderLayout(5,5));
            ventana.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            hacerHead();
            hacerBody();
            ventana.pack();
            ventana.setVisible(true);
        } catch (IOException ex) {
            Logger.getLogger(InterfazCliente.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    private void hacerHead() {
        tit.setBackground(Color.cyan);
        titulo = new JLabel("Envio de mensajes de "+user);
        titulo.setFont(ft);
        tit.add(titulo);
        tit.setBorder(borde);
        ventana.add(tit,BorderLayout.NORTH);
        
    }

    private void hacerBody() {
        body.setLayout(new BorderLayout(5, 5));
        body.setBorder(borde);
        JLabel subtit = new JLabel("Ingrese su mensaje");
        subtit.setFont(fst);
        body.add(subtit,BorderLayout.NORTH);
        msj.setFont(fmsj);
        body.add(msj,BorderLayout.CENTER);
        enviar.setFont(fmsj);
        enviar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent ae) {
                OutputStream os = null;
                    try {
                            os = cliente.getOutputStream();
                            ObjectOutputStream op = new ObjectOutputStream(os);
                            //DataOutputStream flujoDOS = new DataOutputStream(os);
                            String mensaje=msj.getText();
                            System.out.println("Mensaje en UI: "+mensaje);
                            rsa.encriptar(mensaje);
                            op.writeObject(rsa);
                            op.close();
                            os.close();
                    } catch (SocketException ex) {
                        try {
                            cliente = new Socket("187.202.60.164", 8080);
                            os = cliente.getOutputStream();
                            ObjectOutputStream op = new ObjectOutputStream(os);
                            //DataOutputStream flujoDOS = new DataOutputStream(os);
                            String mensaje=msj.getText();
                            System.out.println("Mensaje en UI: "+mensaje);
                            rsa.encriptar(mensaje);
                            op.writeObject(rsa);
                            op.close();
                            os.close();
                        } catch (IOException ex1) {
                            System.out.println("Exepción de la excepcion");
                            Logger.getLogger(InterfazCliente.class.getName()).log(Level.SEVERE, null, ex1);
                        }
                        
                    } catch (IOException ex) {
                        Logger.getLogger(InterfazCliente.class.getName()).log(Level.SEVERE, null, ex);
                    }finally {
                        try {
                            os.close();
                            msj.setText("");
                        } catch (IOException ex) {
                            Logger.getLogger(InterfazCliente.class.getName()).log(Level.SEVERE, null, ex);
                        }
                    }
                
            }
        });
        body.add(msj, BorderLayout.CENTER);
        body.add(enviar, BorderLayout.SOUTH);
        ventana.add(body, BorderLayout.CENTER);
    }
    
}
