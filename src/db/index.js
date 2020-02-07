const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./src/data/stats.db')

db.count = function (value) {
  return new Promise((resolve, reject) => {
    db.get('SELECT COUNT(*) as count FROM stats WHERE results = ?', [value], (err, row) => {
      if (err) return reject(err)
      return resolve(row.count)
    })
  })
}

db.insert = function (value) {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO stats (results) VALUES (?)', [value], (err, rows) => {
      if (err) return reject(err)
      return resolve(rows)
    })
  })
}

module.exports = db
