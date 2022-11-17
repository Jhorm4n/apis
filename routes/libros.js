const { Router } = require("express");
const router = Router(); //Obtener la función Router, lo que hace es redirecionar
const {getLibro, postLibro, putLibro,patchLibro, deleteLibro } = require('../controllers/libros')

router.get("/", getLibro);

router.post("/", postLibro);

router.put("/",putLibro);

router.delete("/",deleteLibro);

router.patch("/", patchLibro);

module.exports = router;