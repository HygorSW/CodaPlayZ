var express = require("express");
var router = express.Router();

var playlistController = require("../controllers/perfilController")

router.post("/cadastrarPlaylist", function (req, res) {
    playlistController.cadastrarPlaylist(req, res)
})

router.get("/buscarPlaylist", function(req, res) {
    perfilController.buscarPlaylist(req, res)
})

module.exports = router