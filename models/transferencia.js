
const { Schema, model } = require('mongoose');

const TransferenciaSchema = Schema({
    descripcion: {
        type: String,
    },

    id: {
        type: Number,
        unique: true

    },

    firmante1: {
        type: String,
    },

    firmante2: {
        type: String,
    },

    destinatario: {
        type: String,
    },

    fecha: {
        type: String,
    },

    ejecutada: {
        type: Boolean,
    },
    
    valor:{
        type: Number
    }
});



module.exports = model( 'Transferencia', TransferenciaSchema );
