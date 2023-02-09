const supertest = require('supertest');
const {app, server} = require('./index.js');

const api = supertest(app);

// Success => We get the data of the movies found as json
test('Movies are returned as json', async () => {
    await api.get('/search').query({query: 'Harry Potter'})
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

// Bad request if we don't receive a query from the client
test('Return status code 400 if query is not defined', async () => {
    await api.get('/search').query({query: ''})
    .expect(400);
});

// Shutting down the server after running all the tests
afterAll(() => {
    server.close();
});
