/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('Should be able to list all users in a page', async () => {
    const response = await request(app).get('/api/users?since=0');

    expect(response.body).toHaveProperty('next');
    expect(response.body).toHaveProperty('users');
  });

  it('Should NOT be able to list all users in a page', async () => {
    const response = await request(app).get('/api/users');

    expect(response.body).toHaveProperty('error');
  });
});
