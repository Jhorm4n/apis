const { Router } = require("express");
const router = Router(); //Obtener la función Router, lo que hace es redirecionar
const {getUsuario, postUsuario} = require('../controllers/usuario')

//Obtener usuario
router.get("/",getUsuario);

router.post("/",postUsuario);

module.exports = router;
