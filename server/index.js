const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = "3000"

app.set('trust proxy', true);

var cors = require('cors')
 
app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
  
app.get('/words', db.getWords)

app.get('/users', db.getUsers)

app.get('/users/:id', db.getUserById)

app.get('/scores', db.getScores)

app.get('/scores/:id', db.getScoresByWordID)

app.get('/rankings', db.getRankings)



// app.get('/addScores', db.addScore)

// app.get('/addWord', db.addWord)

  
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

// Listen to the specified port, otherwise 3080
const PORT = process.env.PORT || 3080;
const server = app.listen(PORT, () => {
  console.log(`Server Running: http://localhost:${PORT}`);
});


// /**
// //  * The SIGTERM signal is a generic signal used to cause program 
// //  * termination. Unlike SIGKILL , this signal can be blocked, 
// //  * handled, and ignored. It is the normal way to politely ask a 
// //  * program to terminate. The shell command kill generates 
// //  * SIGTERM by default.
// //  */
// process.on('SIGTERM', () => {
//     server.close(() => {
//         console.log('Server Close: Process Terminated!');
//     });
// });