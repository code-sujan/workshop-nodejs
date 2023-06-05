const express = require('express');
const HomeController = require('@/controllers/HomeController');
const UserController = require('@/controllers/UserController');
const FacultyController = require('@/controllers/FacultyController');
const StudentController = require('@/controllers/StudentController');
const LoginController = require('@/controllers/LoginController');

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

router.get('/student', StudentController.index);
router.post('/student/new', StudentController.new);

router.get('/login', LoginController.login);
router.post('/login', LoginController.loginPost);
router.get('/logout', LoginController.logout);


module.exports = router;