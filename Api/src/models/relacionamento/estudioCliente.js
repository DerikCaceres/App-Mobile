const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estudioCliente = new Schema({

    estudioId:{
        type : mongoose.Types.ObjectId,
        ref:'estudio',
        required: true,
    },
    clienteId:[{
        type : mongoose.Types.ObjectId,
        ref:'cliente',
        required: true,
    }],
    stats:{
        type: String,
        required: true,
        enum: ['A', 'I','E'],//E excluir 
        default: 'A'
    }



});
module.exports = mongoose.model('EstudioCliente', estudioCliente);