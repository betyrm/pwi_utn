const { Router } = require('express');
const router = Router();

const {
    bienvenida, 
    nomina_calif,
    insertar,
    borrar,
    actualizar
}= require('../controllers/calificaciones');

router.get('/bienvenida', bienvenida);
router.get('/nomina_calif', nomina_calif);
router.post('/insertar', insertar);
router.delete('/borrar', borrar);
router.put('/actualizar', actualizar);

module.exports = router;