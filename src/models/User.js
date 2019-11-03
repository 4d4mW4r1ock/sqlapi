//classe que representa o model User
const { Model, DataTypes } = require('sequelize');

//nós criamos a classe user e fazemos ela herdar da classe model
//ao fazer isto, temos acesso aos métodos de manipulação da nossa base de dados.
class User extends Model{
    static init(sequelize){
        super.init(
            {
                name: DataTypes.STRING, //note que não é necessário declara no model os campos id,
                email: DataTypes.STRING //created_at e updated_at
            },
            { sequelize }
        )
    }
}

module.exports = User;