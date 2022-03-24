const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profissional = new Schema({
    nome:{
        type: String,
        required: [true, 'nome necessario.']
    },
    foto: String,
   
    email: {
        type: String,
        required: [true, 'e-mail necessario.']
    },
    senha:{
        type: String,
        default: null,
    },
    telefone: String,
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: String,
        pais: String
    },
    dataNasci:{
        type: String,
        required: true
    },
    sexo:{
        type: String,
        enum: ['M', 'F'],
        required: true
    },
    funcionamento:{
        type: String,
        required: true,
        enum: ['A', 'I'],
        default: 'A'
    },
    contaBancaria: {
        titular: {
            type: String,
            required: true
        },
        numDoc: {
            type: String,
            required: true
        },
        banco: {
            type: String,
            required: true
        },
        tipodConta: {
            type: String,
            required: true
        },
        ag: {
            type: String,
            required: true
        },
        Nconta: {
            type: String,
            required: true
        }
    },
    recebedorId:{
        type: String,
        required: true
    },
    datadeCadastro:{
        type: Date,
        default: Date.now,
    },
});

estudio.index({geo: '2dsphere'});
module.exports = mongoose.model('Profissional', profissional);