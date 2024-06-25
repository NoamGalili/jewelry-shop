const express = require('express')
const jewelriesController = require('./controllers/jewelries') // מי אחראי לנהל את כל הנושא של כלל הפריטים באתר 

const server = express () //building the server

server.use(express.static('public'))
server.get("/", jewelriesController.getAlljewelry)
//server.get("/", jewelryController.getAlljewelry) // מה ינתן למי שמבקשת את עמוד הבית שלנו
server.listen(80) //listning on port 80 (might change to https and 443 if have time)