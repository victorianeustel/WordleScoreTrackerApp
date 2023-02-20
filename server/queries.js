//pkill -f node

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '35.193.9.16',
  database: 'postgres',
  password: 'sDf%QpOPP:HI,q4R',
  port: 5432,
})

const getWords = (request, response) => {
    pool.query('SELECT * FROM words ORDER BY word_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getScores = (request, response) => {
    pool.query('SELECT * FROM scores order by word_id ASC, user_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE user_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getScoresByWordID = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT user_id, score_value FROM scores WHERE word_id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
  }

  const getRankings = (request, response) => {
    pool.query('SELECT * FROM public."rankingByAverage"', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//   const addWord = (request, response) => {
//     const { word_value, word_date } = request.body

//     pool.query('Insert into words (word_value, word_date) values ($1, $2) RETURNING *', [word_value, word_date], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).send(`Word added with ID: ${results.rows[0].id}`)
//     })
// }

// const addScore = (request, response) => {
//   const { user_id, word_id, score_value } = request.body

//   pool.query('Insert into scores (user_id, word_id, score_value) values ($1, $2, $3) RETURNING *', [user_id, word_id, score_value], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`Score added with ID`)
//   })
// }

  module.exports = {
    getWords,
    getUsers,
    getUserById,
    getScores,
    getScoresByWordID,
    getRankings,
    // addWord,
    // addScore,
  }

