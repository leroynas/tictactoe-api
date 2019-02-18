const db = require('.');

module.exports = {
  async insert() {
    const id = await db.run('INSERT INTO games(id) VALUES (null)');
    return id;
  },
};
