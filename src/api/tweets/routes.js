const express = require('express');
const router = express.Router();

const tweetController = require('./controller.js');

router.route('/tweets')
    .get(tweetController.getAll);

module.exports = router;
