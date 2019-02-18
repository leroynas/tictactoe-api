const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./tictactoe.db', (err) => {
  if (err) console.error(err);
  console.log('Successfully opened Tic Tac Toe database');
});

module.exports = {
  createTables: () => {
    db.run(`
      CREATE TABLE IF NOT EXISTS games(
        id INTEGER PRIMARY KEY AUTOINCREMENT
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS steps(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        game_id INTEGER,
        is_x BOOLEAN,
        x INTEGER,
        Y INTEGER
      )
    `);
  },

  run: (query, data = []) => new Promise((resolve, reject) => {
    db.run(query, data, function result(err) {
      if (err) reject(err);
      resolve(this.lastID);
    });
  }),
};
