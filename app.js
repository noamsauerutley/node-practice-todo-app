import express from 'express'
import db from './db/db'

const app = express()

// parse incoming request data
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.post('/api/vi/todos', (req, res) => {
  if(!req.body.title) {
    return res.status(400).send({
      succes: 'false',
      message: 'title is required'
    })
  } else if (!req.body.description){
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    })
  }
  const todo = {
    id: db.length + 1,
    title: req.body.title,
    description: req.body.description
  }
  db.push(todo)
  return res.status(201).send({
    success: 'true', 
    message: 'todo added successfully',
    todo
  })
})
  

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
