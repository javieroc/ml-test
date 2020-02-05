'use strict'

const http = require('http')
const express = require('express')
const { isMutant } = require('./services')

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000
const dna = ['3TGCGA', 'CAGTGC', 'TTATGT', 'AGAA2G', '1CCCTA', 'TCACTG']

server.listen(port, () => {
  console.log(`Server listen on port ${port}`)
})

// const dnaArray = dna.map(e => Array.from(e))
// console.log(dnaArray)
// isMutant(dnaArray).then(res => console.log(`Is mutant: ${res}`))
// console.log('Not blocking event loop')
