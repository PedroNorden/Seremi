const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {
    index: (req, res) => {
        UserModel.getAll((err, results) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.json(results);
        });
    },
    registro: async (req, res) => {
        try {
          const { nombre, rut, email, region, comuna, password } = req.body;
      
          const existingUser = await UserModel.findByRut(rut);
          if (existingUser.length > 0) {
            return res.status(400).json({ message: 'Usuario ya registrado' });
          }
      
          const result = await UserModel.create({ nombre, rut, email, region, comuna, password });
          res.status(201).json({
            message: 'Usuario registrado exitosamente',
            userId: result.insertId,
            ...req.body
          });
      
        } catch (err) {
          res.status(500).json({ error: err });
        }
      },
    login: async (req, res) => {
        try {
            const { rut, password } = req.body;
            if (!rut || !password) {
                return res.status(400).json({ message: 'Rut y contraseña son requeridos' });
            }
            const user = await UserModel.findByRut(rut);

            if (user.length === 0) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            const isPasswordValid = await bcrypt.compare(password, user[0].password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Contraseña incorrecta' });
            }
            const JWT_SECRET = process.env.JWT_SECRET;
            const token = jwt.sign({ id: user[0].id, rut: user[0].rut }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: 'Inicio de sesión exitoso', token});
        }
        catch (err) {
            res.status(500).json({ error: err });
        }
    },
    profile: (req, res) => {
        res.json({
            message: 'Perfil de usuario',
            user: {
                id: req.user.id,
                rut: req.user.rut,
                nombre: req.user.nombre,
                email: req.user.email,
                region: req.user.region,
                comuna: req.user.comuna
            }
        })
    }
}

module.exports = userController;