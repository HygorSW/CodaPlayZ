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

function alterarCapaPlaylist(req, res) {

    var imagem = req.file.filename
    var idUsuario = req.body.idUsuario
    var idPlaylist = req.body.idPlaylist

    if (idUsuario == undefined) {
        res.status(400).sendo("Seu idUsuario está indefinido")
    } else if (imagem == undefined) {
        res.status(400).sendo("Seu imagem está indefinido")
    } else if (idPlaylist == undefined) {
        res.status(400).sendo("Seu idPlaylist está indefinido")
    } else {

        playlistModel.alterarCapaPlaylist(idUsuario, idPlaylist, imagem)
            .then(resultado => {
                res.status(201).send("Imagem alterada com sucesso");
            }).catch(err => {
                res.status(500).send(err);
            });
    }
}

function buscarInfoPlaylist(req, res) {

    var idPlaylist = req.params.id


    playlistModel.buscarInfoPlaylist(idPlaylist)
        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(err => {
            res.status(500).send(err);
        });
}

module.exports = {
    buscarMusica, editorPlaylist, deletarMusica, buscarPlaylist, alterarCapaPlaylist, buscarInfoPlaylist
}
