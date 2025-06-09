const db = require('../config/db');

const RegionModel = {
    getAll: (callback) => {
        db.query('SELECT * FROM regiones', callback);
    },
    findById: (id, callback) => {
        db.query('SELECT * FROM regiones WHERE id = ?', [id], callback);
    },
}