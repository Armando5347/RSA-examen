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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <br>
        <header>
        <h1 class="text-justify text-center">Examen con RSA</h1>
        </header>
        <main class="container">
                <h2 class="text-justify text-center">Ingrese su acceso</h2>
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="card col-md-6">
                        <div class="card-body form-group ">
                            <br>
                            <a href="arrancarServidor" class="btn btn-success form-control">
                                Ser servidor
                            </a>

                            <a href="arrancarCliente" class="btn btn-success form-control">
                                Ser cliente
                            </a>
                            <br>
                        </div>
                    </div>
                    <div class="col-md-3"></div>
                </div>
        </main>
        <footer class="container-fluid bg-success text-center fixed-bottom footer">
            <strong class="contanier text-white-50">
                Pagina creada por Damian Jarrillo Armando y Luis Fernando Tenorio Aspiros
            </strong>
        </footer>
    </body>
</html>
