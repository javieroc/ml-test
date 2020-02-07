const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./src/data/stats.db')

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
