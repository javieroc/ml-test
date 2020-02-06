const express = require('express')
const { postMutant, getStats } = require('../controllers')
const router = express.Router()

router.post('/mutant', postMutant)

router.get('/stats', getStats)

module.exports = router
