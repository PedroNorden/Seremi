const express = require('express');
const router = express.Router();
const RegionController = require('../controllers/regionController');
const db = require('../config/db');

router.get('/', RegionController.index);
router.get('/idRegion', RegionController.findById); 

router.get('/regiones', (req, res) => {
    const queryRegiones = 'SELECT * FROM regiones';
    const queryComunas = 'SELECT * FROM comunas';

    db.query(queryRegiones, (err, regiones) => {
        if (err) return res.status(500).json({ error: 'Error al obtener regiones' });

        db.query(queryComunas, (err, comunas) => {
        if (err) return res.status(500).json({ error: 'Error al obtener comunas' });

        res.json({ regiones, comunas });
        });
    });
});

module.exports = router;