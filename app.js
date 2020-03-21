import express from 'express'
import db from './db/db'

const app = express()

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
