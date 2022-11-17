const { time } = require('console')
const {Schema, model} = require('mongoose')

const reservaSchema = Schema ({
    idReserva:{
        type: Number
    },
    idBeneficiario: {
        type: Number
    },
    fecha:{
        type: String
    },
    horaInicio:{
        type: String 
    },
    horaFin:{
        type: String 
    },
    estado:{
        type: Number
    }
})
module.exports = model('Reserva',reservaSchema)