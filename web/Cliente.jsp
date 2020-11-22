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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        <!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <!-- Popper JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

        <!-- Latest compiled JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <br>
        <header>
            <h1 class="text-justify text-center" >Envio de mensaje a encriptar</h1>
        </header>
        
        <main class="container">
            <h2 class="text-justify text-center" >Inserte su mensaje</h2>
            <br>
            <div class="row">
                <div class="col-md-3"></div>
                <form method="post" action="Cifrar" class="form-group card col-md-6">
                    <div class="card-body">
                        <textarea name='mensaje' placeholder="Ingrese su mensaje" class="form-control"></textarea>
                        <br>
                        <input type="submit" value="Enviar" class="btn btn-success form-control">
                    </div>
                </form>
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
