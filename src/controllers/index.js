const db = require('../db')
const { isMutant } = require('../utils')

const postMutant = async (req, res) => {
  const { dna } = req.body
  try {
    const dnaToCheck = dna.map(e => Array.from(e))
    const result = await isMutant(dnaToCheck)
    const type = result ? 'mutant' : 'human'
    await db.insert(type)
    if (result) {
      return res.status(200).send({ isMutant: result })
    }
    return res.status(403).send('Forbidden')
  } catch (err) {
    console.log(`Invalid dna chain: ${err.message}`)
    res.status(500).send('Server error')
  }
}

module.exports = {
  postMutant
}