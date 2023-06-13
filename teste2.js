var data = require("./fakeData");

module.exports = function addUser(req, res) {
    var name = req.body.name;
    var job = req.body.job;

    var newUser = {
        name: name,
        job: job,
    };

    data.push(newUser);

    res.send(newUser);
};

//1- O parâmetro job está sendo atribuído à variável jov. Para corrigir isso, altere var jov = req.body.job; para var job = req.body.job;.

//2- Ao criar o novo usuário, a propriedade job está sendo atribuída à variável job, mas ao criar o objeto newUser, a propriedade está sendo definida como job: job. Para corrigir isso, altere job: job para job: jov ou, se você corrigir o ponto anterior, para job: job.

//3- A função exportada deveria ser uma função com os parâmetros req e res, mas está sendo definida como uma função anônima. Para corrigir isso, você pode transformá-la em uma função nomeada.