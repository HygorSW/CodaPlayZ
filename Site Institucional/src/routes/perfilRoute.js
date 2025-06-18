var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController")

router.post("/cadastrarPlaylist", function (req, res) {
    perfilController.cadastrarPlaylist(req, res)
})

router.get("/buscarPlaylist", function (req, res) {
    perfilController.buscarPlaylist(req, res)
})

router.get("/buscarMusicasRecentes", function (req, res) {
    perfilController.buscarMusicasRecentes(req, res)
})

router.get("/buscarMusicasAleatoria", function (req, res) {
    perfilController.buscarMusicasAleatoria(req, res)
})

module.exports = router