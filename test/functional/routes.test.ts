import supertest from 'supertest';
import server from '../../src/server';
import { connected } from 'process';

let mockUser: string;

describe('User endpoints', () => {
  beforeEach(() => {
    mockUser = 'usuario de teste';
  });
  it('should create a new user', async done => {
    const res = await supertest(server.app)
      .post('/users/')
      .send({
        name: mockUser
      });
    const { name } = res.body;

    expect(name).toEqual(mockUser);
    expect(res.status).toEqual(200)
    
    done();
  });
  it('should list users', async done => {
    const res = await supertest(server.app)
      .get('/users/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(res.body).toBeInstanceOf(Array);

    done(); 
  });
  it('should update a new user', async done => {

    const responsePost = await supertest(server.app)
      .post('/users/')
      .send({
        name: mockUser
      });
    
    const { _id: id } = responsePost.body;

    await supertest(server.app)
      .put(`/users/${id}`)
      .send({
        name: 'update'
      })
      .expect(200);
    
    done();
  });
  it('should delete a new user', async done => {

    const responsePost = await supertest(server.app)
      .post('/users/')
      .send({
        name: mockUser
      });
    
    const { _id: id } = responsePost.body;

    await supertest(server.app)
      .delete(`/users/${id}`)
      .expect(200);
    
    done();
  });
});