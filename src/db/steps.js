const db = require('.');

module.exports = {
  async insert(step, gameid) {
    const query = 'INSERT INTO steps(game_id, is_x, x, y) VALUES ($gameid, $isx, $x, $y)';
    const params = {
      $gameid: gameid,
      $isx: step.isX,
      $x: step.position.x,
      $y: step.position.y,
    };

    const id = await db.run(query, params);

    return id;
  },
};
