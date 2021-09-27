const router = require('express').Router();

const { 
    rutaGet, rutaPost
 } = require('../controllers/alumnos.controllers');

//  Ruta que devuelve todos los alumnos
router.get('/', rutaGet)

router.post('/', rutaPost)


module.exports = router;
