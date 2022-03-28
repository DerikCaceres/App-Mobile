const express = require('express');
const App = express();
const morgan = require('morgan');
require('./database');

//midwares
App.use(morgan('dev'));
//variaveis
App.set('port', 8000);

App.listen(App.get('port'), () => {
    console.log(`Escutando na porta ${App.get('port')}`);
});
