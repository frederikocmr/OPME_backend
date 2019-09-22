/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('UserDetail', () => {
  it('Should be able to list the detail of a user', async () => {
    const response = await request(app).get('/api/users/frederikocmr/details');

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('login');
    expect(response.body).toHaveProperty('profile_url');
    expect(response.body).toHaveProperty('avatar_url');
    expect(response.body).toHaveProperty('login_creation');
  });

  it('Should NOT be able to list the detail of a user', async () => {
    const response = await request(app).get('/api/users/./details');

    expect(response.body).toHaveProperty('error');
  });
});
