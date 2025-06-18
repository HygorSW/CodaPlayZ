var usuarioModel = require("../models/usuarioModel")

function cadastrar(req, res) {
    var email = req.body.emailServer
    var senha = req.body.senhaServer

    usuarioModel.cadastrar( email, senha)

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao realizar o cadastro! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (!email || !senha) {
        return res.status(400).json({ erro: "Preencha todos os campos!" });
    }

    usuarioModel.autenticar(email, senha)
        .then(function (resultado) {
            if (resultado.length == 1) {
                res.json({
                    idUsuario: resultado[0].idUsuario,
                    nome: resultado[0].nome,
                    email: resultado[0].email,
                    senha: resultado[0].senha
                });
            } else {
                res.status(403).json({ erro: "Email e/ou senha inválidos!" });
            }
        })
        .catch(function (erro) {
            console.error("Erro ao autenticar:", erro);
            res.status(500).json({ erro: "Erro interno no servidor." });
        });
}

module.exports = {
    cadastrar,
    autenticar
}