const db = require('../config/db');

const UserModel = {
    getAll: (callback) => {
        db.query('SELECT * FROM usuarios', callback);
    },
    create: (user, callback) => {
        db.query('INSERT INTO usuarios SET ?', user, callback);
    },
    findByUsername: (username, callback) => {
        db.query('SELECT * FROM usuarios WHERE username = ?', [username], callback);
    }
};

module.exports = UserModel;