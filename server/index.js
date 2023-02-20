const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pg = require('pg');
const  router = express.Router();
const db = require('./queries')

const port = process.env.PORT || 8080;

const Pool = pg.Pool;

const pool = new Pool({
  user: process.env.DB_USER = 'postgres',
  password: process.env.DB_PASS = 'h2;\TZIM=BrJ?>V_',
  database: process.env.DB_NAME = 'wordle-contest',
  socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
})

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('users', db.getUsers)

app.get('words', db.getWords)

app.get('/users/:id', db.getUserById)

app.get('/scores', db.getScores)

app.get('/scores/:id', db.getScoresByWordID)

app.get('/rankings', db.getRankings)

app.get('/addScores', db.addScore)

app.get('/addWord', db.addWord)

  
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

// Listen to the specified port, otherwise 3080
const PORT = process.env.PORT || 8090;
const server = app.listen(PORT, () => {
  console.log(`Server Running: http://localhost:${PORT}`);
});