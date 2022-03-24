const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cliente = new Schema({

    nome:
    {
        type: String,
        required : [true,'Campo obrigatorio.']
    },
    email:
    {
        type: String,
        required : [true,'Campo obrigatorio.']
    },
    senha:
    {
        type: String,
        default : null
    },
    numero:
    {
        type: String, 
        required : [true,'`Campo Obrigatorio']
    }
    
});


module.exports = mongoose.model('Cliente', cliente);

