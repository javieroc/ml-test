const request = require('supertest')
const app = require('../src/app')

describe('Post /api/mutant', () => {
  it('should dna belongs to a mutant', async () => {
    const res = await request(app)
      .post('/api/mutant')
      .send({
        dna: [
          'ATGCGA',
          'CAGTGC',
          'TTATGT',
          'AGAAGG',
          'CCCCTA',
          'TCACTG'
        ]
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toMatchObject({ isMutant: true })
  })
})

describe('Post /api/mutant', () => {
  it('should dna belongs to a human', async () => {
    const res = await request(app)
      .post('/api/mutant')
      .send({
        dna: [
          '3TGCGA',
          'CAGTGC',
          'TTATGT',
          'AGAA2G',
          '1CCCTA',
          'TCACTG'
        ]
      })
    expect(res.statusCode).toEqual(403)
  })
})
