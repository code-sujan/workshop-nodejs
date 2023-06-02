const express = require('express');
const HomeController = require('@/controllers/HomeController');

const router = express.Router();

router.get('/', HomeController.index);
router.get('/new', HomeController.new);

module.exports = router;