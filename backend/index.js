const express = require('express')
const server = express()
const cors = require('cors')

let users = []

// middleware
server.use(cors())

// endpoints
server.get('/health', (req, res) => {
  res.send('The site is working')
})

server.get('/users', (req, res) => {
  res.json(users)
})

server.post('/users/:name/:email', (req, res) => {
  const {name, email} = req.params
  users.push({name, email})
  res.send('ok')
})

// start server
server.listen(3001, () => {
  console.log('HELLO FROM BACKEND')
})
