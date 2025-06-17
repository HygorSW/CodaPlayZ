var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController")

router.post("/cadastrarPlaylist", function (req, res) {
    perfilController.cadastrarPlaylist(req, res)
})

router.get("/buscarPlaylist", function(req, res) {
    perfilController.buscarPlaylist(req, res)
})

module.exports = router