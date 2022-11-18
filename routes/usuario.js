const { Router } = require("express");
const router = Router(); //Obtener la función Router, lo que hace es redirecionar
const {getUsuario, postUsuario, putUsuario, patchUsuario, deleteUsuario} = require('../controllers/usuario')

//Obtener usuario
router.get("/",getUsuario);

router.post("/",postUsuario);

router.put("/",putUsuario);

router.delete("/",deleteUsuario);

router.patch("/", patchUsuario);

module.exports = router;
