const express = require('express');
const mysql = require('mysql');

var app = express();
var bodyParser = require('body-parser');

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'mybase',
    insecureAuth: true
});

con.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extendsd:true
}));

app.use(express.static('public'));

applicationCache.post('agregarUsuario', (req, res) => {
    let nombre = req.body.nombre;

    con.query('insert into usuario value(' + nombre + ')', (err, respuesa, fields) => {
        if (err) {
            return console.log('Error', err);
        }else{
            return res.send('<h1>Nombre</h1>');
        }
    });
});

app.get('/obtenerUsuario', (req, res) => {
    con.query('select * from usuario', (err, respuesta, field) => {
        if (err) {
            return console.log('error', err);
        }

        var userHtml = '';
        var i = 0;

        respuesa.forEach(user => {
            i++;
            userHtml += `<tr><td>${i}</td></td>${user.nombre}</td></tr>`;
        });
        return res.send(`<table>
            <tr>
                <th>id</th>
                <th>nombre</th>
                ${userhtml}
            </table>
        `);
    });
});