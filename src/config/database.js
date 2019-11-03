//Configuração de conexão com o banco
//ao subir a nossa aplicação ao ambiente de produção devemos lembrar de colocar a configuração
//de conexão com o banco em variáveis de ambiente
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'password1',
    database: 'sqlnode',
    define: {
        timestamps: true,
        underscored: true
    }
};