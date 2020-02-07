const db = require('./')

db.run('CREATE TABLE IF NOT EXISTS stats(dna TEXT, type TEXT)')
