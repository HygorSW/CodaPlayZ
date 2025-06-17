var perfilModel = require("../models/perfilModel")

function cadastrarPlaylist(req, res) {
    var idUsuario = req.body.usuarioServer
    var nomePlaylist = req.body.nomePlaylistServer

    perfilModel.cadastrarPlaylist(nomePlaylist, idUsuario)

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

function buscarPlaylist(req, res) {
    var pkUsuario = req.query.idUsuario;

    perfilModel.buscarPlaylist(pkUsuario)
        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao buscar playlist do usuário! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

module.exports = {
    cadastrarPlaylist,
    buscarPlaylist
}