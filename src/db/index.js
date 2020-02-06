const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./stats.db')

db.select = function () {
  return new Promise((resolve, reject) => {
    db.all('SELECT results FROM stats', [], (err, rows) => {
      if (err) return reject(err)
      return resolve(rows)
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
