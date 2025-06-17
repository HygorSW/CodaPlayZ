var express = require("express");
var router = express.Router();

var playlistController = require("../controllers/playlistController")

router.get("/buscarMusica", function(req, res) {
    playlistController.buscarMusica(req, res)
})

router.post("/deletarMusica", function(req, res) {
    playlistController.deletarMusica(req, res)
})

module.exports = router