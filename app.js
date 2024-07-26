const express = require('express')

//const jewelriesController = require('./controllers/jewelries') // מי אחראי לנהל את כל הנושא של כלל הפריטים באתר 

const jewelries= require('./routes/jewelries')
const server = express () //building the server

server.use(express.static('public'))


///server.get("/", jewelriesController.getAlljewelries) //redirecting / to controller.
//server.get("/login", jewelriesController.getLogin)
//server.get("/register.ejs", jewelriesController.getRegister)
//server.get("/payment.ejs", jewelriesController.getpayment)
//server.get("/credit.ejs", jewelriesController.getCredit)
///server.get("/deleteJewelry", jewelriesController.deleteJewelry)
///server.get("/jewelry", jewelriesController.getJewelry) 

//server.get("/jewelry", jewelriesController.deletejewelry)

server.use(jewelries)
server.listen(80) //listning on port 80 (might change to https and 443 if have time)