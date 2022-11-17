//Funcion para crear la colleciones con schema
const { Schema, model} = require('mongoose')
//Codigo para crear collecion en mongo
const usuarioSchema = Schema({
    documento: {
        type: Number
    },
    nombre: {
        type: String
    },
    correo: {
        type: String
    }

})
module.exports = model('Usuarios',usuarioSchema)
