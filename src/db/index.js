const sqlite3 = require('sqlite3').verbose()
const env = process.env.NODE_ENV || 'development'
const filePath = `./src/data/stats.${env}.db`

const db = new sqlite3.Database(filePath)

db.count = function (value) {
  return new Promise((resolve, reject) => {
    db.get('SELECT COUNT(*) as count FROM stats WHERE type = ?', [value], (err, row) => {
      if (err) return reject(err)
      return resolve(row.count)
    })
  })
}

db.select = function (value) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM stats WHERE dna = ?', [value], (err, row) => {
      if (err) return reject(err)
      return resolve(row)
    })
  })
}

db.insert = function (dna, type) {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO stats (dna, type) VALUES (?, ?)', [dna, type], (err, rows) => {
      if (err) return reject(err)
      return resolve(rows)
    })
  })
}

module.exports = db
