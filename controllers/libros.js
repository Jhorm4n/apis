const { response } = require('express')
const Libro = require('../models/libros')

const getLibro = async (req,res = response) => {
    //const {isbn, titulo, pais, categoria,cantidad} = req.query;
    const libro = await Libro.find()//consulta todos los datos
    //DESESTRUCTURACION DE DATOS
    res.json({
        msg: 'GET API Libro',
        libro
    })
}

const postLibro = async (req,res) => {
    //RECIBIR PARAMETROS
    const {isbn, titulo, pais, categoria,cantidad} = req.body;

    //INSTACIAR EL OBJECTO DE LOS PARAMETROS RECIBIDOS
    const libro = new Libro({isbn, titulo, pais, categoria,cantidad})
    
    //Guardat los datos en la base de datos
    libro.save()
    
    //DESESTRUCTURACION DE DATOS
    res.json({

        msg: 'POST API Libro',
        isbn,
        titulo,
        pais,
        categoria,
        cantidad

    })
}

const deleteLibro = async(req,res) =>{
    const { isbn } = req.query
    const libro = await Libro.findOneAndDelete({isbn : isbn})
    
    res.json({
        msg: 'DELETE API Libro',
        libro
    })

}

const putLibro = async(req,res) =>{
    const {isbn,isbnNuevo,titulo,pais,categoria,cantidad} = req.body

    const libro = await Libro.findOneAndUpdate({isbn:isbn},{ isbn:isbnNuevo,titulo: titulo, pais : pais, categoria : categoria, cantidad : cantidad })

    res.json({
        msg: 'UPDATE API Libro',
        libro
    })
}

const patchLibro = async(req, res) =>{
    const {isbn,titulo} = req.body
    const libro = await Libro.findOneAndUpdate({isbn:isbn},{titulo: titulo})
    res.json({
            msg: 'PATCH API Libro',
            libro
        })
}

module.exports = {
    getLibro,
    postLibro,
    putLibro,
    patchLibro,
    deleteLibro,   
}