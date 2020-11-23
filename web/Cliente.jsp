<%-- 
    Document   : Cliente
    Created on : 21/11/2020, 07:46:54 PM
    Author     : maste
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang='es'>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Parte Cliente</title>
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    </head>
    <body class="container-fluid">
        <header class='bg-primary container-fluid'>
            <h1 class='text-center color-white'>Envio de mensaje a encriptar</h1>
        </header>
        <hr>
        <main class='container'>
            <form method="post" action="Cifrar">
                <textarea class='w-75 form-control' name='mensaje' placeholder="Ingrese su mensaje" maxlength="500" ></textarea>
                <br>
                <input class='btn btn-info' type="submit" value="Enviar">
            </form>
        </main>
    </body>
</html>
