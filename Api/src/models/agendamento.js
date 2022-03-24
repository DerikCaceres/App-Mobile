const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const agendamento = new Schema({

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
    servicoId:[{
        type : mongoose.Types.ObjectId,
        ref:'servico',
        required: true,
    }],
    profissionalId:[{
        type : mongoose.Types.ObjectId,
        ref:'profissional',
        required: true,
    }],

    data:{
        type: Date,
        required: true,
    },
    
    dataCadastro:{
        type: Date,
        default: Date.now,
    },
    comissao:{
        type: Number,
        required: true,
    },
    valor:{
        type: Number,
        required: true,
    },


    
});


module.exports = mongoose.model('Agendamento', agendamento);

