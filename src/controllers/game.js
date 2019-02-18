const dbGames = require('../db/games');
const dbSteps = require('../db/steps');

module.exports = {
  async create(req, res) {
    const { steps } = req.body;

    const gameid = await dbGames.insert();

    steps.forEach(async (step) => {
      await dbSteps.insert(step, gameid);
    });

    res.send({ gameid });
  },
};
