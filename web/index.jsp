<%-- 
    Document   : index
    Created on : 21/11/2020, 07:20:55 PM
    Author     : maste
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>RSA-examen</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header class="container-fluid bg-primary">
        <h1 class='text-center color-white'>Examen con RSA</h1>
        </header>
        <hr>
        <main class="container">
            <div class='bg-secondary container-fluid'>
                <h2>Ingrese su acceso</h2>
            </div>
            <div class='btn-group'>
                <br>
                <a href="arrancarServidor"><button class='btn btn-primary'>Ser servidor</button></a>
                <br>
                <a href="arrancarCliente"><button class='btn btn-secondary'>Ser cliente</button></a>
            </div>
        </main>
    </body>
</html>
