var data = require("./fakeData");
const fs = require("fs");
module.exports = function updateUser(req, res) {
    var id = req.query.id;

    const userIndex = data.findIndex((user) => user.id == id);

    if (userIndex !== -1) {
        data[userIndex].name = req.body.name;
        data[userIndex].job = req.body.job;
        res.send(data[userIndex]);
    } else {
        res.status(404).send("User not found");
    }
};


//1- Substituí a variável reg por userIndex, que armazena o índice do usuário no array data.

//2- Utilizei findIndex em vez de find para obter o índice do usuário com base no ID fornecido. Isso permite atualizar os dados diretamente no array data.

//3- Verifiquei se userIndex é diferente de -1 para garantir que o usuário tenha sido encontrado. Caso seja igual a -1, significa que o usuário não foi encontrado e, nesse caso, é retornado um status 404 com a mensagem "User not found".

//4- Atualizei as propriedades name e job do usuário encontrado com os valores fornecidos em req.body.