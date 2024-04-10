
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
        type: String,
    },
    moneda: {
        type: String
    },
    valor:{
        type: Number
    },
});



module.exports = model( 'Transferencia', TransferenciaSchema );
