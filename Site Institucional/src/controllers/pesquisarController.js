var pesquisarModel = require("../models/pesquisarModel")

function adicionarMusica(req, res) {
    var idPlaylist = req.body.idPlaylistServer;
    var idSpotify = req.body.idSpotifyServer;

    pesquisarModel.adicionarMusica(idPlaylist, idSpotify)
        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao add musica! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function adicionarMusicaRecente(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idSpotify = req.body.idSpotifyServer;

    pesquisarModel.adicionarMusicaRecente(idUsuario, idSpotify)
        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao add musica! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

module.exports = {
    adicionarMusica,
    adicionarMusicaRecente
}
