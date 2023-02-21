const express = require("express");
const mysql = require ("mysql");
const app = express();
const db = require('./queries')

app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`BarkBark Rest API listening on port ${port}`);
});

app.get("/", async (req, res) => {
  res.json({ status: "Bark bark! Ready to roll!" });
});

const pool = mysql.createPool({
  user: 'root',
  password: 'meow',
  database : 'wordle',
  socketPath: `/cloudsql/wordlecontest:us-central1:mysql-wordle`,
})

app.get('/users', async (request, response)=> {
  const query = "SELECT * FROM users;";
  pool.query(query, (error, results) => {
    if (error) {
      response.json({ status: "Not found!", reason: error.code});
    }
    else {
      response.json(200).json(results.rows);
    }
  });
});

app.get('/scores', async (request, response)=>
pool.query('SELECT * FROM scores order by word_id ASC, user_id ASC;', (error, results) => {
  if (error) {
    response.json({ status: "Not found!", reason: error.code});
  }
  else {
      response.json(200).json(results.rows)
  }
})
)

// app.get('/words', async (request, response)=>
//   pool.query('SELECT * FROM words ORDER BY word_id ASC;', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })

// )

app.get('/words', db.getWords)

// app.get('/users/:id', db.getUserById)

// app.get('/scores', db.getScores)

// app.get('/scores/:id', db.getScoresByWordID)

// app.get('/rankings', db.getRankings)



// app.get('/addScores', db.addScore)

// app.get('/addWord', db.addWord)

  