
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'ecommerce'
});

connection.connect(function (err) {
    if (err){
        console.log('Error en el intento de la conexion de la bd');
        console.log('El error está en '+ err.stack);
        return;
    }
    console.log('La conexion fue exitosa');
});

//connection.end();
module.exports = connection;


