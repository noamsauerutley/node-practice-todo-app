import express from 'express'
import db from './db/db'
import bodyParser from 'body-parser'

const app = express()

// parse incoming request data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })

app.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'success: retrieved all todos',
    todos: db
  })
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
