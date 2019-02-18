const express = require('express');
const cors = require('cors');
const db = require('./db');

const { create: gameCreate } = require('./controllers/game');

db.createTables();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


app.post('/game/create', gameCreate);

app.listen(port, () => console.log(`Tic Tac Toe api running on port: ${port}!`));
