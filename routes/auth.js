const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key_for_development';

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registrar nuevo usuario
 *     description: Crea una nueva cuenta de usuario en el sistema
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombreCompleto
 *               - email
 *               - password
 *             properties:
 *               nombreCompleto:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Email ya registrado o datos invalidos
 */
router.post('/register', async (req, res) => {
  try {
    const { nombreCompleto, email, password } = req.body;

    if (!nombreCompleto || !email || !password) {
      return res.status(400).json({
        status: 'fail',
        data: {
          message: 'Todos los campos son requeridos'
        }
      });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        status: 'fail',
        data: {
          message: 'El email ya esta registrado'
        }
      });
    }

    const user = await User.create({ nombreCompleto, email, password });

    res.status(201).json({
      status: 'success',
      data: {
        user: {
          id: user.id,
          nombreCompleto: user.nombreCompleto,
          email: user.email
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Iniciar sesion
 *     description: Autentica un usuario y retorna un token JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso con token JWT
 *       401:
 *         description: Credenciales invalidas
 */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: 'fail',
        data: {
          message: 'Email y password son requeridos'
        }
      });
    }

    const user = await User.scope('withPassword').findOne({ where: { email } });
    
    if (!user) {
      return res.status(401).json({
        status: 'fail',
        data: {
          message: 'Credenciales invalidas'
        }
      });
    }

    const isValidPassword = await user.validPassword(password);
    
    if (!isValidPassword) {
      return res.status(401).json({
        status: 'fail',
        data: {
          message: 'Credenciales invalidas'
        }
      });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      status: 'success',
      data: {
        token,
        user: {
          id: user.id,
          nombreCompleto: user.nombreCompleto,
          email: user.email
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

module.exports = router;
