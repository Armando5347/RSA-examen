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
            out.println("<head>"
                    + "<meta chatset='utf-8'>"
                    + "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css\" integrity=\"sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2\" crossorigin=\"anonymous\">\n" +
"        <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx\" crossorigin=\"anonymous\"></script>\n" +
"        <!-- jQuery library -->\n" +
"        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n" +
"\n" +
"        <!-- Popper JS -->\n" +
"        <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n" +
"\n" +
"        <!-- Latest compiled JavaScript -->\n" +
"        <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\"></script>\n" +
"        <link rel=\"stylesheet\" href=\"styles.css\">");
            out.println("<title>Servlet Descifrar</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Texto descifrado</h1> <br>"
                    +"<main class='container'>"
                    + "<p>"+desencriptado+"</p>"+
                    "<a href='index.jsp'><button class='btn btn-danger'>Volver</button></a> </main>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
