const { router } = require('../../routes/AuthenticationRoute');
const request = require('supertest');
const User = require('../../models/UserModel');
jest.mock('../../models/UserModel');

describe('POST /Signup', () => {
  it('should create a new user and return the user data with a token', async () => {
    User.findOne.mockResolvedValue(null);  // Assume no user exists with the email
    User.prototype.save.mockResolvedValue({
      _id: '1',
      name: 'Test User',
      email: 'test@example.com'
    });

    const response = await request(router)
      .post('/Signup')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      });

    expect(response.status).toBe(200);
    expect(response.body.user).toHaveProperty('id', '1');
    expect(response.body).toHaveProperty('token');
  });
});
