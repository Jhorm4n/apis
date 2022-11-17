const { Router } = require("express");
const router = Router(); //Obtener la función Router, lo que hace es redirecionar
const {getReserva, postReserva, putReserva,patchReserva, deleteReserva } = require('../controllers/reservas')

router.get("/", getReserva);

router.post("/", postReserva);

router.put("/",putReserva);

router.delete("/",deleteReserva);

router.patch("/", patchReserva);

module.exports = router;