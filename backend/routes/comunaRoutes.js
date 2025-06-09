const express = require('express');
const router = express.Router();
const ComunaController = require('../controllers/comunaController');


router.get('/comunas/:regionId', ComunaController.getByRegionId);