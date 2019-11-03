'use strict';

//migration da tabela de users, tem por objetivo armazenar versões da tabela na base de dados.

module.exports = {
  up: (queryInterface, Sequelize) => {

        //método que cria a tabela de acordo com a estrutura definida
        return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER, //os tipos de dados permitidos podem consultados na documentação
          primaryKey: true,//do Sequelize
          autoIncrement: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at: {//timestamps
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      });
  
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('users');
  }
};
