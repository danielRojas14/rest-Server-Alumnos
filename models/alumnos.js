const { model, Schema } = require('mongoose');

const AlumnosSchema = new Schema({

    nombre: { type: String, required: true },
    apellido: { type: String,  required: true },
    dni: { type: Number,  required: true },
    telefono: { type: Number,  required: true },
    gmail: { type: String,  required: true },
    empleo: { type: String,  required: true },
    estadoCivil: { type: String},
    profesion: { type: String,  required: true }
    
});


module.exports = model('alumnos', AlumnosSchema);