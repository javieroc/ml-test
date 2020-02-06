'use strict'

const http = require('http')
const express = require('express')
const routes = require('./routes')

const app = express()
app.use(express.json())
app.use('/api', routes)

const server = http.createServer(app)
const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`Server listen on port ${port}`)
})
