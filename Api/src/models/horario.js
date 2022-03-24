const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new Schema({

    servidoId:{
        type : mongoose.Types.ObjectId,
        ref:'estudio',
        required: true,
    },
    servicos:[{
        type : mongoose.Types.ObjectId,
        ref:'servico',
        required: true,
    }],
    funcionario :[{
        type : mongoose.Types.ObjectId,
        ref:'profissonal',
        required: true,
    }],
    dias:{
        type: [Number],
        required: true,
    },
    inicio:{
        type: Date,
        required: true,
    },
    fim:{
        type: Date,
        required: true,
    }




});
module.exports = mongoose.model('Horario', horario);