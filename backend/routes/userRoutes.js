const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', UserController.index);
router.post('/', UserController.registro);
router.post('/auth/', UserController.login);
module.exports = router;
