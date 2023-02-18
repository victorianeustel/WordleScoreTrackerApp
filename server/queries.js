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
    const id = partInt(request.params.id)

    pool.query('select words.word_id, users.user_id, score_value from scores full join users on scores.user_id = users.user_id full join words on scores.word_id = words.word_id where words.word_id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
  }

  module.exports = {
    getWords,
    getUsers,
    getUserById,
    getScores,
    getScoresByWordID,
  }