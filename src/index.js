const { isMutant } = require('./services')

const dna = ['3TGCGA', 'CAGTGC', 'TTATGT', 'AGAA2G', '1CCCTA', 'TCACTG']
const dnaArray = dna.map(e => Array.from(e))
console.log(dnaArray)
isMutant(dnaArray).then(res => console.log(`Is mutant: ${res}`))
console.log('Not blocking event loop')
