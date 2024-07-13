const express = require('express')
const jewelriesController = require('./controllers/jewelries') // מי אחראי לנהל את כל הנושא של כלל הפריטים באתר 

const server = express () //building the server

server.use(express.static('public'))

server.get("/", jewelriesController.getAlljewelries) //redirecting / to controller.
server.get("/jewelry", jewelriesController.getJewelry)
//server.get("/jewelry", jewelriesController.deletejewelry)
server.listen(80) //listning on port 80 (might change to https and 443 if have time)