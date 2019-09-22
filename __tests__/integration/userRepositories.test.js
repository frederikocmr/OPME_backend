/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('UserRepositories', () => {
  it('Should be able to list all users in a page', async () => {
    const response = await request(app).get('/api/users/frederikocmr/repos');

    expect(response.body[0]).toMatchSnapshot({
      id: expect.any(Number),
    });
  });

  it('Should NOT be able to list all users in a page', async () => {
    const response = await request(app).get('/api/users/./repos');

    expect(response.body).toHaveProperty('error');
  });
});
