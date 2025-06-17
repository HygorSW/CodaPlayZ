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

module.exports = {
    buscarMusica
}