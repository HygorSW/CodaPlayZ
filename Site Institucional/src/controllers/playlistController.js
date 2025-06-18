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
    var descricaoPlaylist = req.body.descricaoServer
    var nomePlaylist = req.body.nomePlaylistServer

    playlistModel.editarPlaylist(idPlaylist, nomePlaylist, descricaoPlaylist)

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

    var pkPlaylist = req.query.pkPlaylist;

    playlistModel.buscarPlaylist(pkPlaylist)

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


function deletarMusica(req, res) {
    var idPlaylist = req.body.idPlaylistServer;
    var idMusica = req.body.idMusicaServer;

    playlistModel.deletarMusica(idPlaylist, idMusica)
        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao deletar musica! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

module.exports = {
    buscarMusica, editorPlaylist, deletarMusica, buscarPlaylist
}
