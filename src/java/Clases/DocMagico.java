/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Clases;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author maste
 */
public class DocMagico implements Serializable {
    
    public DocMagico(){
        FileOutputStream fs = null;
        ObjectOutputStream os = null;
        try {
            RSA rsanulo = null;
            fs = new FileOutputStream("CifradoRSA.txt");
            os = new ObjectOutputStream(fs);
            os.writeObject(rsanulo);
            os.close();
            fs.close();
        } catch (FileNotFoundException ex) {
            Logger.getLogger(DocMagico.class.getName()).log(Level.SEVERE, null, ex);
            System.out.println("Error instancía");
        } catch (IOException ex) {
            Logger.getLogger(DocMagico.class.getName()).log(Level.SEVERE, null, ex);
            System.out.println("Error Instancía");
        }finally{
            try {
                os.close();
                fs.close();
            } catch (IOException | NullPointerException ex) {
                Logger.getLogger(DocMagico.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
    
    public RSA GetDocMagico(){
        FileInputStream fi = null;
        ObjectInputStream oi = null;
        RSA rsa = null;
        try{
            fi = new FileInputStream("CifradoRSA.txt");
            oi = new ObjectInputStream(fi);
            rsa = (RSA) oi.readObject();
        } catch (IOException | ClassNotFoundException ex) {
            Logger.getLogger(DocMagico.class.getName()).log(Level.SEVERE, null, ex);
        }finally{
            try {
                fi.close();
                oi.close();
            } catch (IOException | NullPointerException ex) {
                Logger.getLogger(DocMagico.class.getName()).log(Level.SEVERE, null, ex);
            }
            return rsa;
        }
    }
    
    public void setDocMagico(RSA rsa){
        FileOutputStream fo = null;
        ObjectOutputStream oo = null;
        try{
            fo = new FileOutputStream("CifradoRSA.txt");
            oo = new ObjectOutputStream(fo);
            oo.writeObject(rsa);
        } catch (IOException ex) {
            Logger.getLogger(DocMagico.class.getName()).log(Level.SEVERE, null, ex);
        }finally{
            try {
                fo.close();
                oo.close();
            } catch (IOException | NullPointerException ex) {
                Logger.getLogger(DocMagico.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
}
