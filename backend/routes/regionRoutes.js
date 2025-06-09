const express = require('express');
const router = express.Router();
const RegionController = require('../controllers/regionController');

router.get('/', RegionController.index);
router.get('/idRegion', RegionController.findById); 

module.exports = router;