const express = require('express');
const HomeController = require('@/controllers/HomeController');
const UserController = require('@/controllers/UserController');
const FacultyController = require('../src/controllers/FacultyController');

const router = express.Router();

router.get('/', HomeController.index);
router.get('/home/new', HomeController.new);

router.get('/user', UserController.index);
router.get('/user/new', UserController.new);
router.post('/user/new', UserController.newPost);
router.get('/user/edit/:id', UserController.edit);
router.post('/user/edit/:id', UserController.editPost);
router.get('/user/delete/:id', UserController.delete);

router.get('/faculty', FacultyController.index);
router.get('/faculty/new', FacultyController.new);


module.exports = router;