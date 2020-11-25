/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rsa.examen.sockets;

import javax.swing.JLabel;
import javax.swing.JTextArea;
import javax.swing.JTextField;

/**
 *
 * @author maste
 */
class Mensaje {
    private String mensaje;
    private String autor;
    
    Mensaje(String mensaje, String autor){
        this.mensaje = mensaje;
        System.out.println("Mensaje guardado: "+mensaje);
        this.autor = autor;
       
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    
}
