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
            out.println("<meta charset='utf-8'>");
            out.println("<title>Servlet Descifrar</title>"
                    + " <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css\" crossorigin=\"anonymous\">\n" +
"        <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" crossorigin=\"anonymous\"></script>\n" +
"        <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js\" crossorigin=\"anonymous\"></script>");            
            out.println("</head>");
            out.println("<body class='container-fluid'>");
            out.println("<header class='container-fluid bg-secondary'><h1 class='text-center color-white'>Texto descifrado</h1></header> <hr>"
                    + "<main class='container'>"
                    + "<p>"+desencriptado+"</p>"+
                    "<a href='index.jsp'><button class='btn btn-danger'>Volver</button></a>"
                            + "</main>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
