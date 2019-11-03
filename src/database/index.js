const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const User = require('../models/User');

//variável que armazena a conexão com o banco
const connection = new Sequelize(dbConfig);

//passa a variável de conexão ao model chamando o método sobrescrito init
User.init(connection);

module.exports = connection;