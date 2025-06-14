const express = require('express');
const router = express.Router();
const spotifyController = require('../controllers/spotifyController');

router.get('/token', spotifyController.pegarToken);

module.exports = router;