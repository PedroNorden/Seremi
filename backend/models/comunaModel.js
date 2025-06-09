const db = require('../config/db');

const ComunaModel = {
    findByRegionId: (id, callback) => {
        db.query('SELECT * FROM comunas WHERE id = ?', [id], callback);
    },
}