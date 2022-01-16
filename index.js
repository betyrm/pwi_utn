
const express = require('express');

const { connection} = require('./db/config');
const app = express();
const Port = 8080;

//middleware

app.use(express.json());
app.use(express.static('public'));
app.use('/api/alumnos', require('./routers/alumnos'));
/* app.use('/api/calificaciones', require('./routers/calificaciones'));
app.use('/api/cuotas', require('./routers/cuotas'));
app.use('/api/directivos', require('./routers/directivos'));
app.use('/api/docentes', require('./routers/docentes'));
app.use('/api/padres', require('./routers/padres'));
  */
 
//configuracion de puerto

app.listen(Port, () => {
    console.log(`Servidor corriendo en el puerto ${Port}`);
});

app.on('error', (err) => {
    console.log(`Error en la ejecucion del servidor: ${err}`);
});
