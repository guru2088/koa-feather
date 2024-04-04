import supertest from 'supertest';

import server from '../server';

describe('/v1/echo', () => {
  it('should return status 200 OK', async () => {
    const response = await supertest(server.callback())
      .post('/v1/echo')
      .send({ name: 'Jenny' });

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ name: 'Jenny' });
  });

  it('should return status 500 Bad Request on missing required body property', async () => {
    const response = await supertest(server.callback()).post('/v1/echo');
    expect(response.status).toEqual(500);
  });
});
