const { Router } = require("express");
const router = Router(); //Obtener la función Router, lo que hace es redirecionar
const {getAsigSancion, postAsigSancion,deleteAsigSancion} = require('../controllers/asigSancion')

//Obtener usuario
router.get("/",getAsigSancion);

router.post("/",postAsigSancion);

router.delete("/",deleteAsigSancion);

module.exports = router;