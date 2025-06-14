var playlistModel = require("../models/playlistModel")

function cadastrar(req, res) {
    var idUsuario = req.body.usuarioServer
    var nomePlaylist = req.body.nomePlaylistServer

    playlistModel.cadastrar(nomePlaylist, idUsuario)

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


module.exports = {
    cadastrar
}