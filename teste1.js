const data = require("./fakeData");

const contadorLeituraUsuario = {};

const getUser = (req, res, next) => {
  const name = req.query.name;
  const user = data.find((user) => user.name === name);

  if (user) {
    //  Contador de leitura para o usuário
    if (contadorLeituraUsuario[name]) {
      contadorLeituraUsuario[name]++;
    } else {
      contadorLeituraUsuario[name] = 1;
    }

    res.send(user);
  } else {
    res.status(404).send("Usuário não encontrado");
  }
};

const getUsers = (req, res, next) => {
  res.send(data);
};

const getContagemLeituraUsuario = (req, res, next) => {
  const name = req.query.name;
  const contagem = contadorLeituraUsuario[name] || 0;

  res.send(`O usuário '${name}' foi lido ${contagem} vezes.`);
};

module.exports = {
  getUser,
  getUsers,
  getContagemLeituraUsuario,
};

//1- Utilizei o método find em vez de um loop for para buscar o usuário no array de dados. Isso torna o código mais legível e reduz a complexidade.

//2- Adicionei uma verificação para o caso em que o usuário não é encontrado. Nesse caso, é retornado um status 404 com uma mensagem de "Usuário não encontrado".

//3- Removi a declaração var e utilizei const para as variáveis que não sofrem reatribuição, como name e user. Isso melhora a legibilidade e ajuda a evitar erros.

//4- Utilizei a sintaxe de comparação estrita (===) em vez de igualdade solta (==) para a comparação do nome do usuário. Isso evita erros de comparação indesejados.
