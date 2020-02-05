'use strict'

function isMutant (dna) {
  return new Promise((resolve) => {
    setTimeout(function () {
      // Check horizontal
      for (let row = 0; row < dna.length; row += 1) {
        for (let col = 0; col < dna[row].length - 3; col += 1) {
          if (dna[row][col] === dna[row][col + 1] && dna[row][col] === dna[row][col + 2] && dna[row][col] === dna[row][col + 3]) {
            return resolve(true)
          }
        }
      }

      // Check vertical
      for (let row = 0; row < dna.length - 3; row += 1) {
        for (let col = 0; col < dna[row].length; col += 1) {
          if (dna[row][col] === dna[row + 1][col] && dna[row][col] === dna[row + 2][col] && dna[row][col] === dna[row + 3][col]) {
            return resolve(true)
          }
        }
      }

      // Check positive diagonal /
      for (let row = 3; row < dna.length; row += 1) {
        for (let col = 0; col < dna[row].length - 3; col += 1) {
          if (dna[row][col] === dna[row - 1][col + 1] && dna[row][col] === dna[row - 2][col + 2] && dna[row][col] === dna[row - 3][col + 3]) {
            return resolve(true)
          }
        }
      }

      // Check negative diagonal \
      for (let row = 0; row < dna.length - 3; row += 1) {
        for (let col = 0; col < dna[row].length - 3; col += 1) {
          if (dna[row][col] === dna[row + 1][col + 1] && dna[row][col] === dna[row + 2][col + 2] && dna[row][col] === dna[row + 3][col + 3]) {
            return resolve(true)
          }
        }
      }

      resolve(false)
    }, 1)
  })
}

module.exports = {
  isMutant
}
