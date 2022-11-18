const { response } = require('express')
const Usuario = require('../models/usuario')

const getUsuario = async (req,res = response) => {
    //const {isbn, titulo, pais, categoria,cantidad} = req.query;
    const usuario = await Usuario.find()//consulta todos los datos
    //DESESTRUCTURACION DE DATOS
    res.json({
        msg: 'GET API Usuario',
        usuario
    })

}

const postUsuario = async (req,res) => {
    //RECIBIR PARAMETROS
    const {documento, nombre, correo} = req.body;

    //INSTACIAR EL OBJECTO DE LOS PARAMETROS RECIBIDOS
    const usuario = new Usuario({documento, nombre, correo})
    
    //Guardat los datos en la base de datos
    usuario.save()
    
    //DESESTRUCTURACION DE DATOS
    res.json({

        msg: 'POST API Libro',
        documento,
        nombre,
        correo,

    })
}
const deleteUsuario = async(req,res) =>{
    const { documento } = req.query
    const usuario = await Usuario.findOneAndDelete({documento : documento})
    
    res.json({
        msg: 'DELETE API Usuario',
        usuario
    })

}

const putUsuario = async(req,res) =>{
    const {documento,documentoNuevo,nombre,correo} = req.body

    const libro = await Libro.findOneAndUpdate({documento:documento},{ documento:documentoNuevo,nombre: nombre, correo : correo})

    res.json({
        msg: 'UPDATE API Libro',
        libro
    })
}

const patchUsuario = async(req, res) =>{
    const {documento,nombre} = req.body
    const usuario = await Usuario.findOneAndUpdate({documento:documento},{nombre: nombre})
    res.json({
            msg: 'PATCH API Libro',
            usuario
        })
}
module.exports = {
    getUsuario,
    postUsuario,
    deleteUsuario,
    putUsuario,
    patchUsuario
}