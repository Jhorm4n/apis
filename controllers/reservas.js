const { response } = require('express')
const Reserva = require('../models/reservas')

const getReserva = async (req, res) => {
    const reserva = await Reserva.find()

    res.json({
        msg:'GET API Reserva',
        reserva
    })
}

const postReserva = async (req, res) =>{
    const {idReserva, idBeneficiario, fecha, horaIncio, horaFin, estado} = req.body;

    const reserva = new Reserva({idReserva, idBeneficiario, fecha, horaIncio, horaFin, estado})

    reserva.save()

    res.json({

        msg: 'POST API Reserva',
        idReserva,
        idBeneficiario,
        fecha,
        horaIncio,
        horaFin,
        estado

    })
}

const deleteReserva = async(req,res) =>{
    const { idReserva } = req.query
    const reserva = await Reserva.findOneAndDelete({idReserva : idReserva})
    
    res.json({
        msg: 'DELETE API Reserva',
        reserva
    })

}

const putReserva = async(req,res) =>{
    const {idReserva, idBeneficiario, fecha, horaIncio, horaFin, estado} = req.body

    const reserva = await Reserva.findOneAndUpdate({idReserva:idReserva},{idReserva, idBeneficiario, fecha, horaIncio, horaFin, estado})

    res.json({
        msg: 'UPDATE API Reserva',
        reserva
    })
}

const patchReserva = async(req, res) =>{
    const {idReserva,fecha} = req.body
    const reserva = await Reserva.findOneAndUpdate({idReserva:idReserva},{fecha: fecha})
    res.json({
            msg: 'PATCH API Reserva',
            reserva
        })
}

module.exports = {
    getReserva,
    postReserva,
    deleteReserva,
    putReserva,
    patchReserva
}