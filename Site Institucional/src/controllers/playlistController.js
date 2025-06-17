var playlistModel = require("../models/playlistModel")

function buscarMusica(req, res) {
    var idPlaylist = req.query.idPlaylist;

    playlistModel.buscarMusica(idPlaylist)
        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao buscar musica! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function editorPlaylist(req, res) {
    var idPlaylist = req.body.playlistServer
    var nomePlaylist = req.body.nomePlaylistServer

    playlistModel.editarPlaylist(idPlaylist, nomePlaylist)

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
    buscarMusica, editorPlaylist
}