const express = require('express');
const HomeController = require('@/controllers/HomeController');

const router = express.Router();

router.get('/', HomeController.index);

module.exports = router;