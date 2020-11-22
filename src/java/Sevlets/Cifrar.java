/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Sevlets;

import Clases.DocMagico;
import Clases.RSA;
import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigInteger;
import java.util.Arrays;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author maste
 */
public class Cifrar extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try (PrintWriter out = response.getWriter()) {
            DocMagico doc = new DocMagico();
            RSA rsa = new RSA(100);
            doc.inicializar();
            System.out.println("Un saludo mi gente");
            String mensaje = request.getParameter("mensaje");
            System.out.println(mensaje);
            BigInteger []cifrado = rsa.encriptar(mensaje);
            doc.setDocMagico(rsa);
            
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html lang='es'>");
            out.println("<head>");
            out.println("<title>Prueba temporal de encriptación</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Se ha encriptado</h1> <br>"
                    + "<p>"+Arrays.toString(cifrado)+"</p><br>"
                    + "<a href='index.jsp'><button>Volver</button></a>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
