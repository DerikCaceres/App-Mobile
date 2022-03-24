const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const servico = new Schema({

    servidoId:{
        type : mongoose.Types.ObjectId,
        ref:'estudio',
        required: true,
    },

    titulo:{
        type : String, 
        required : true,
        
    },
    preco:{
        type : Number, 
        required : true,
        
    },
    comissao:{
        type : Number, 
        required : true,
        
    },
    tempo:{
        type : Number, 
        required : true,
        
    },
    retorno:{
        type : String, 
        required : true,
        
    },
    descrisao:{
        type : String, 
        required : true,
        
    },
    data:{
        type : date,
        default : date.now,

    },
    funcionamento:{
        type: String,
        required: true,
        enum: ['A', 'I','E'],//E excluir 
        default: 'A'
    },
    
    


});


module.exports = mongoose.model('Servico', servico);

