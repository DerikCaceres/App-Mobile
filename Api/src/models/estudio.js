const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estudio = new Schema({
    nome:{
        type: String,
        required: [true, 'nome necessario.']
    },
    foto: String,
    capa: String,
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
    geo:{
    tipo: String,
    coordenadas: Array,
    },
    datadeCadastro:{
        type: Date,
        default: Date.now,
    }
});

estudio.index({geo: '2dsphere'});
module.exports = mongoose.model('Estudio', estudio);