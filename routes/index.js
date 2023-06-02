const express = require('express');
const HomeController = require('@/controllers/HomeController');
const UserController = require('@/controllers/UserController');

const router = express.Router();

router.get('/', HomeController.index);
router.get('/home/new', HomeController.new);

router.get('/user', UserController.index);

module.exports = router;