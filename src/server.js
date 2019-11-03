//framework para tratar requisições http
const express = require('express');

//importando as rotas da nossa aplicação que são definidas no arquivo routes.js
const routes = require('./routes');

//importando a configuração do banco de dados
require('./database');

const app = express();

//estou dizendo que a minha aplicação vai trabalhar com json's e com rotas
app.use(express.json())
app.use(routes);

//subindo a minha aplicação em uma porta local
app.listen(3333);