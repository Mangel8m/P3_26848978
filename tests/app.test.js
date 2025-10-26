const request = require('supertest');
const app = require('../app');
const User = require('../models/User');

describe('API Endpoints Tests', () => {
  
  describe('GET /ping', () => {
    it('should return 200 OK', async () => {
      const response = await request(app).get('/ping');
      expect(response.status).toBe(200);
    });
  });

  describe('GET /about', () => {
    it('should return 200 OK', async () => {
      const response = await request(app).get('/about');
      expect(response.status).toBe(200);
    });

    it('should return JSend format with correct data', async () => {
      const response = await request(app).get('/about');
      expect(response.body).toHaveProperty('status', 'success');
      expect(response.body).toHaveProperty('data');
      expect(response.body.data).toHaveProperty('nombreCompleto');
      expect(response.body.data).toHaveProperty('cedula');
      expect(response.body.data).toHaveProperty('seccion');
    });
  });

  describe('Authentication Endpoints', () => {
    beforeEach(async () => {
      await User.destroy({ where: {}, truncate: true });
    });

    describe('POST /auth/register', () => {
      it('should register a new user successfully', async () => {
        const userData = {
          nombreCompleto: 'Test User',
          email: 'test@example.com',
          password: 'password123'
        };

        const response = await request(app)
          .post('/auth/register')
          .send(userData);

        expect(response.status).toBe(201);
        expect(response.body.status).toBe('success');
        expect(response.body.data.user).toHaveProperty('email', userData.email);
        expect(response.body.data.user).not.toHaveProperty('password');
      });

      it('should fail with duplicate email', async () => {
        const userData = {
          nombreCompleto: 'Test User',
          email: 'test@example.com',
          password: 'password123'
        };

        await request(app).post('/auth/register').send(userData);
        const response = await request(app).post('/auth/register').send(userData);

        expect(response.status).toBe(400);
        expect(response.body.status).toBe('fail');
      });

      it('should fail with missing fields', async () => {
        const response = await request(app)
          .post('/auth/register')
          .send({ email: 'test@example.com' });

        expect(response.status).toBe(400);
        expect(response.body.status).toBe('fail');
      });
    });

    describe('POST /auth/login', () => {
      beforeEach(async () => {
        await request(app)
          .post('/auth/register')
          .send({
            nombreCompleto: 'Test User',
            email: 'test@example.com',
            password: 'password123'
          });
      });

      it('should login successfully with correct credentials', async () => {
        const response = await request(app)
          .post('/auth/login')
          .send({
            email: 'test@example.com',
            password: 'password123'
          });

        expect(response.status).toBe(200);
        expect(response.body.status).toBe('success');
        expect(response.body.data).toHaveProperty('token');
        expect(response.body.data).toHaveProperty('user');
        expect(response.body.data.user).not.toHaveProperty('password');
      });

      it('should fail with incorrect password', async () => {
        const response = await request(app)
          .post('/auth/login')
          .send({
            email: 'test@example.com',
            password: 'wrongpassword'
          });

        expect(response.status).toBe(401);
        expect(response.body.status).toBe('fail');
      });

      it('should fail with non-existent email', async () => {
        const response = await request(app)
          .post('/auth/login')
          .send({
            email: 'nonexistent@example.com',
            password: 'password123'
          });

        expect(response.status).toBe(401);
        expect(response.body.status).toBe('fail');
      });
    });
  });

  describe('Protected Routes - /users', () => {
    let authToken;

    beforeEach(async () => {
      await User.destroy({ where: {}, truncate: true });
      
      await request(app)
        .post('/auth/register')
        .send({
          nombreCompleto: 'Test User',
          email: 'test@example.com',
          password: 'password123'
        });

      const loginResponse = await request(app)
        .post('/auth/login')
        .send({
          email: 'test@example.com',
          password: 'password123'
        });

      authToken = loginResponse.body.data.token;
    });

    describe('GET /users', () => {
      it('should fail without authentication', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(401);
      });

      it('should return users list with valid token', async () => {
        const response = await request(app)
          .get('/users')
          .set('Authorization', `Bearer ${authToken}`);

        expect(response.status).toBe(200);
        expect(response.body.status).toBe('success');
        expect(response.body.data).toHaveProperty('users');
        expect(Array.isArray(response.body.data.users)).toBe(true);
      });
    });

    describe('GET /users/:id', () => {
      it('should return specific user with valid token', async () => {
        const users = await User.findAll();
        const userId = users[0].id;

        const response = await request(app)
          .get(`/users/${userId}`)
          .set('Authorization', `Bearer ${authToken}`);

        expect(response.status).toBe(200);
        expect(response.body.status).toBe('success');
        expect(response.body.data.user).toHaveProperty('id', userId);
      });

      it('should return 404 for non-existent user', async () => {
        const response = await request(app)
          .get('/users/9999')
          .set('Authorization', `Bearer ${authToken}`);

        expect(response.status).toBe(404);
      });
    });

    describe('POST /users', () => {
      it('should create new user with valid token', async () => {
        const newUser = {
          nombreCompleto: 'New User',
          email: 'newuser@example.com',
          password: 'password123'
        };

        const response = await request(app)
          .post('/users')
          .set('Authorization', `Bearer ${authToken}`)
          .send(newUser);

        expect(response.status).toBe(201);
        expect(response.body.status).toBe('success');
        expect(response.body.data.user).toHaveProperty('email', newUser.email);
      });
    });

    describe('PUT /users/:id', () => {
      it('should update user with valid token', async () => {
        const users = await User.findAll();
        const userId = users[0].id;

        const response = await request(app)
          .put(`/users/${userId}`)
          .set('Authorization', `Bearer ${authToken}`)
          .send({ nombreCompleto: 'Updated Name' });

        expect(response.status).toBe(200);
        expect(response.body.status).toBe('success');
      });
    });

    describe('DELETE /users/:id', () => {
      it('should delete user with valid token', async () => {
        const users = await User.findAll();
        const userId = users[0].id;

        const response = await request(app)
          .delete(`/users/${userId}`)
          .set('Authorization', `Bearer ${authToken}`);

        expect(response.status).toBe(200);
        expect(response.body.status).toBe('success');
      });
    });
  });
});
