var express = require("express");
var router = express.Router();

var playlistController = require("../controllers/playlistController")

router.post("/cadastrarPlaylist", function (req, res) {
    playlistController.cadastrar(req, res)
})

router.post("/autenticar", function (req, res) {
    playlistController.autenticar(req, res)
})

module.exports = router