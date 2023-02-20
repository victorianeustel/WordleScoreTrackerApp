const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 8080;

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER = 'postgres',
  password: process.env.DB_PASS = 'lauren97',
  database: process.env.DB_NAME = 'wordle-contest',
  // port: process.env.PORT = 5432,
  host: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
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

app.get('/users', async (request, response)=>
  pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
)

app.get('/scores', async (request, response)=>
pool.query('SELECT * FROM scores order by word_id ASC, user_id ASC', (error, results) => {
  if (error) {
    throw error
  }
  response.status(200).json(results.rows)
})
)

app.get('/words', async (request, response)=>
  pool.query('SELECT * FROM words ORDER BY word_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })

)

// app.get('/words', db.getWords)

// app.get('/users/:id', db.getUserById)

// app.get('/scores', db.getScores)

// app.get('/scores/:id', db.getScoresByWordID)

// app.get('/rankings', db.getRankings)



// app.get('/addScores', db.addScore)

// app.get('/addWord', db.addWord)

  
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
