const db = require('../db')
const { isMutant, gcd } = require('../utils')

const postMutant = async (req, res) => {
  const { dna } = req.body
  try {
    const dnaToCheck = dna.map(e => Array.from(e))
    const dnaChain = dna.join('')
    const result = await isMutant(dnaToCheck)
    const type = result ? 'mutant' : 'human'
    const row = await db.select(dnaChain)
    if (!row) {
      await db.insert(dnaChain, type)
    }
    if (result) {
      return res.status(200).send({ isMutant: result })
    }
    return res.status(403).send('Forbidden')
  } catch (err) {
    console.log(`Invalid dna chain: ${err.message}`)
    res.status(500).send('Server error')
  }
}

const getStats = async (req, res) => {
  try {
    const mutants = await db.count('mutant')
    const humans = await db.count('human')
    const ratio = `${mutants / gcd(mutants, humans)}:${humans / gcd(mutants, humans)}`
    return res.status(200).send({
      count_mutant_dna: mutants,
      count_human_dna: humans,
      ratio
    })
  } catch (err) {
    res.status(500).send('Server error')
  }
}

module.exports = {
  postMutant,
  getStats
}
