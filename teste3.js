var data = require("./fakeData");
const fs = require("fs");
module.exports = function deleteUser(req, res) {
    var name = req.query.name;

    var userIndex = data.findIndex((user) => user.name === name);

    if (userIndex !== -1) {
        data.splice(userIndex, 1);
        res.send("success");
    } else {
        res.status(404).send("User not found");
    }
};


//1- Utilizei o método findIndex para encontrar o índice do usuário com base no nome. Isso é mais eficiente do que percorrer o array com um loop.

//2- Verifiquei se userIndex é diferente de -1 para garantir que o usuário tenha sido encontrado. Caso seja igual a -1, significa que o usuário não foi encontrado e, nesse caso, é retornado um status 404 com a mensagem "User not found".

//3- Utilizei o método splice para remover o usuário do array data com base no índice encontrado.

//4- Em vez de atribuir null ao usuário, removi-o diretamente do array utilizando o método splice.

//5- Enviei a resposta com a mensagem "success" para indicar que o usuário foi excluído com sucesso.