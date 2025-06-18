var express = require("express");
var router = express.Router();

var pesquisarController = require("../controllers/pesquisarController")

router.post("/adicionarMusica", function (req, res) {
    pesquisarController.adicionarMusica(req, res)
})

router.post("/adicionarMusicaRecente", function (req, res) {
    pesquisarController.adicionarMusicaRecente(req, res)
})

module.exports = router