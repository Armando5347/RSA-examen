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
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author maste
 */
public class Descifrar extends HttpServlet {

   
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        DocMagico doc = new DocMagico();
        RSA rsa = new RSA(100);
        RSA rsaCliente = doc.GetDocMagico();
        String desencriptado = rsa.desencriptar(rsaCliente.getCifrado(), rsaCliente.getD(), rsaCliente.getN());
        
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html lang='es'>");
            out.println("<head>");
            out.println("<title>Servlet Descifrar</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Texto descifrado</h1> <br>"
                    + "<p>"+desencriptado+"</p>"+
                    "<a href='index.jsp'><button>Volver</button></a>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
