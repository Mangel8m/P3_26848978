require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const app = express();

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API RESTful - P3_26848978',
      version: '1.0.0',
      description: 'API con autenticacion JWT y gestion de usuarios',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.js', './app.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * @swagger
 * /ping:
 *   get:
 *     summary: Verifica que la API esta funcionando
 *     description: Endpoint simple que responde con status 200 OK
 *     responses:
 *       200:
 *         description: Respuesta exitosa sin contenido
 */
app.get('/ping', (req, res) => {
  res.status(200).end();
});

/**
 * @swagger
 * /about:
 *   get:
 *     summary: Informacion del desarrollador
 *     description: Retorna datos personales del desarrollador en formato JSend
 *     responses:
 *       200:
 *         description: Respuesta exitosa con datos del desarrollador
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     nombreCompleto:
 *                       type: string
 *                     cedula:
 *                       type: string
 *                     seccion:
 *                       type: string
 */
app.get('/about', (req, res) => {
  res.json({
    status: 'success',
    data: {
      nombreCompleto: 'Miguel Morales',
      cedula: '26848978',
      seccion: '2'
    }
  });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: 'error',
    message: err.message,
    data: null
  });
});

module.exports = app;
