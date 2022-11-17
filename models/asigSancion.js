const { Schema, model} = require('mongoose')

const asigSancionSchema = Schema({
    idAsigSancion: {
        type: Number
    },
    idUsuario: {
        type: Number
    },
    idSancion: {
        type: Number
    },
    observacion: {
        type: String
    },
    estado: {
        type: Number
    }

})
module.exports = model('AsigSanciones',asigSancionSchema)