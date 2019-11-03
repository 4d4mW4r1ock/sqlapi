//arquivo que armazena as rotas da nossa aplicação
const express = require('express');

//importanto o controller do User
const UserController = require('./controllers/UserController');

//instanciamos o objeto que manipulará as rotas
const routes = express.Router();

//rotas da aplicação
//o "/" significa que estamos nos referindo a rota raiz da nossa aplicação
routes.get('/', (req, res) => {
    return res.json({hello: "IFBA"});
});
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

//em JavaScript sempre que criamos um arquivo a ser usado em outra parte do nosso
//código, nós devemos importar este arquivo
module.exports = routes;