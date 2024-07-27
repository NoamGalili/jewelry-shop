const express = require('express')
const server = express () //building the server

const jewelriesController = require('./controllers/jewelries') 

const jewelries = require('./routes/jewelries') //if we want to add more routes files we need to import them the same as here...
const users = require('./routes/users')

server.use(express.static('public'))

server.use(jewelries)
server.use(users)
server.listen(80) //listning on port 80