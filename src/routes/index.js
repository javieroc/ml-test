const express = require('express')
const { postMutant } = require('../controllers')
const router = express.Router()

router.post('/mutant', postMutant)

module.exports = router
