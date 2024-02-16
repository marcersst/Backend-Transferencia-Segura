
const { Schema, model } = require('mongoose');

const TransferenciaSchema = Schema({
    descripcion: {
        type: String,
    },

    id: {
        type: Number,
        unique: true

    },

    creador:{
    type:String
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
        type: Date,
    },

    ejecutada: {
        type: Boolean,
    },
    
    valor:{
        type: Number
    },
});



module.exports = model( 'Transferencia', TransferenciaSchema );
