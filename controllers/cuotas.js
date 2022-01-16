const bienvenida = ((req, res) => {
    //console.log(req);
    res.send('Bienvenido a nuestra Aplicación');
});

const nomina = ((req,res) => {
    res.send('<h1>La nómina de todos los alumnos</h1>');
});
const insertar =  ((req,res) => {

    console.log(req);
    console.log(req.body);
    res.send('Los datos han sido recibidos')
    //insert...
});

const borrar =((req,res) => {
    res.send('Los datos han sido eliminados')
    //delete..
});

const actualizar =  ((req,res) => {
    
    res.send('Los datos han sido actualizados')
    //update..
    
}); 

module.exports = {
    bienvenida, 
    nomina,
    insertar,
    borrar,
    actualizar
}
