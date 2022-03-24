const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estudioProfissional = new Schema({

    estudioId:{
        type : mongoose.Types.ObjectId,
        ref:'estudio',
        required: true,
    },
    profissionalId:[{
        type : mongoose.Types.ObjectId,
        ref:'profissional',
        required: true,
    }],
    stats:{
        type: String,
        required: true,
        enum: ['A', 'I','E'],//E excluir 
        default: 'A'
    }



});
module.exports = mongoose.model('EstudioProfissional', estudioProfissional);