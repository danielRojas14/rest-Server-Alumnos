const ctrlHome = {};
// const { findById, findByIdAndUpdate, findByIdAndDelete } = require('../models/notas');
const alumnos = require('../models/alumnos');

// Devuelve todos los usuarios de la colección
ctrlHome.rutaGet = async (req, res) => {
    const Alumno = await alumnos.find({}) // consulta para todos los documentos
    
    // Respuesta del servidor
    res.json(Alumno);
}

// Controlador que almacena una nueva persona
ctrlHome.rutaPost = async (req, res) => {
    const { nombre, apellido, dni, telefono, gmail, empleo, estadoCivil, profesion } = req.body;
    const alumnosInsert = new alumnos({ nombre, apellido, dni, telefono, gmail, empleo, estadoCivil, profesion});
    await alumnosInsert.save() 

    res.json({msg: 'alumnos creado correctamente'});
}




module.exports = ctrlHome;