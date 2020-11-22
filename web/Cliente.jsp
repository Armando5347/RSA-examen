<%-- 
    Document   : Cliente
    Created on : 21/11/2020, 07:46:54 PM
    Author     : maste
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>P Cliente</title>
    </head>
    <body>
        <header>
            <h1>Envio de mensaje a encriptar</h1>
        </header>
        
        <main>
            <h2>Inserte su mensaje</h2>
            <br>
            <form method="post" action="Cifrar">
                <textarea name='mensaje' placeholder="Ingrese su mensaje"></textarea>
                <br>
                <input type="submit" value="Enviar">
            </form>
        </main>
    </body>
</html>
