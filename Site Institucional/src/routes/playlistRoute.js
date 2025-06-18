var express = require("express");
var router = express.Router();
var upload = require("../config/configUpload")
var playlistController = require("../controllers/playlistController")

router.get("/buscarMusica", function (req, res) {
    playlistController.buscarMusica(req, res)
})

router.put("/editarPlaylist", function (req, res) {
    playlistController.editorPlaylist(req, res)
})

router.post("/deletarMusica", function (req, res) {
    playlistController.deletarMusica(req, res)
})

router.get("/buscarEspecifica", function (req, res) {
    playlistController.buscarPlaylist(req, res)
})

router.post('/alterarCapaPlaylist', upload.single('fotoPlaylist'), (req, res) => {
    playlistController.alterarCapaPlaylist(req, res);
})

router.get("/buscarInfoPlaylist/:id", function (req, res) {
    playlistController.buscarInfoPlaylist(req, res)
})

module.exports = router