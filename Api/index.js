const express = require('express');
const App = express();
const morgan = require('morgan');

//midwares
App.use(morgan('dev'));
//variaveis
App.set('port', 8000);

App.listen(App.get('port'), () => {
    console.log(`Escutando na porta ${App.get('port')}`);
});
