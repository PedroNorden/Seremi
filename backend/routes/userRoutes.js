const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', UserController.index);
router.get('/profile', UserController.profile);
router.post('/registro', UserController.registro); // <- ESTA ruta es la que falla
router.post('/login', UserController.login);

module.exports = router;
