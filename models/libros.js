//Funcion para crear la colleciones con schema
const { Schema, model} = require('mongoose')
//Codigo para crear collecion en mongo
const libroSchema = Schema({
    isbn: {
        type: Number
    },
    titulo: {
        type: String
    },
    pais: {
        type: String
    },
    categoria: {
        type: String
    },
    cantidad: {
        type: Number
    }

})
module.exports = model('Libro',libroSchema)
