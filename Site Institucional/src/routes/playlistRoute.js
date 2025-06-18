var express = require("express");
var router = express.Router();

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

router.get("/buscarPlaylist", function (req, res) {
    perfilController.buscarPlaylist(req, res)
})


module.exports = router