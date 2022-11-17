const { response } = require('express')
const AsigSancion = require('../models/asigSancion')

const getAsigSancion = async (req,res = response) => {
    const asigSancion = await AsigSancion.find()//consulta todos los datos

    res.json({
        msg: 'GET API Libro',
        asigSancion
    })

}

const postAsigSancion = async (req,res) => {
    const {idAsigSancion, idUsuario, idSancion, observacion,estado} = req.body;

    const asigSancion = new AsigSancion({idAsigSancion, idUsuario, idSancion, observacion,estado})
    
    asigSancion.save()
    
    //DESESTRUCTURACION DE DATOS
    res.json({

        msg: 'POST API Libro',
        idAsigSancion,
        idUsuario,
        idSancion,
        observacion,
        estado

    })
}

const deleteAsigSancion = async(req,res) =>{
    const { idAsigSancion } = req.query
    const asigSancion = await AsigSancion.findOneAndDelete({idAsigSancion : idAsigSancion})
    
    res.json({
        msg: 'DELETE API Libro',
        asigSancion
    })

} 

module.exports = {
    getAsigSancion,
    postAsigSancion,
    deleteAsigSancion
}