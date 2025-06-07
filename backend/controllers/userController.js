const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {
  index: (req, res) => {
    UserModel.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  },

  registro: (req, res) => {
    const { nombre_completo, rut, correo, password, region_id, comuna_id } = req.body;

    if (!nombre_completo || !rut || !correo || !password || !region_id || !comuna_id) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    UserModel.findByRut(rut, (err, users) => {
      if (err) return res.status(500).json({ error: err });

      if (users.length > 0) {
        return res.status(400).json({ message: 'Usuario ya registrado' });
      }

      bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ error: err });

        const newUser = {
            nombre_completo,
            rut,
            correo,
            contraseña: hash, // ✅ Usa el nombre correcto de la columna
            region_id,
            comuna_id
            };


        console.log("🛠️ Datos a insertar:", newUser); // debug opcional

        UserModel.create(newUser, (err, result) => {
          if (err) {
            console.error("❌ Error SQL al crear usuario:", err);
            return res.status(500).json({ error: err });
          }

          res.status(201).json({
            message: 'Usuario registrado exitosamente',
            userId: result.insertId
          });
        });
      });
    });
  },

  login: (req, res) => {
    const { rut, password } = req.body;

    if (!rut || !password) {
      return res.status(400).json({ message: 'Rut y contraseña requeridos' });
    }

    UserModel.findByRut(rut, (err, users) => {
      if (err) return res.status(500).json({ error: err });

      if (users.length === 0) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      const user = users[0];

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return res.status(500).json({ error: err });

        if (!isMatch) {
          return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign(
          { id: user.id, rut: user.rut },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
        );

        res.json({ message: 'Inicio de sesión exitoso', token });
      });
    });
  },

  profile: (req, res) => {
    res.json({
      message: 'Perfil de usuario',
      user: {
        id: req.user.id,
        rut: req.user.rut,
        nombre: req.user.nombre_completo,
        correo: req.user.correo,
        region: req.user.region_id,
        comuna: req.user.comuna_id
      }
    });
  }
};

module.exports = userController;
