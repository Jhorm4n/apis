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
module.exports = {
    getUsuario,
    postUsuario
}