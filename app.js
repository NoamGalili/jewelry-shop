const express = require('express')
const server = express () //building the server
const db = require('./db');
const port=80;
const connectDB = require('./db'); // Adjust the path as needed
connectDB();
//import db from 'db.js';
//db.connectDB();
//const jewelriesController = require('./routes/jewelries') 

const jewelries = require('./routes/jewelries') //if we want to add more routes files we need to import them the same as here...
const users = require('./routes/users')
const orders = require('./routes/orders')
const branches = require('./routes/branches')

const api= require('./routes/api')
const jewelriesController= require('./controllers/jewelries')
//server.use(express.static('public'))
server.use(express.json());


server.use(jewelries)
server.use(users)
server.use(orders)
server.use(branches)
server.use(api)

server.use(express.static('public'));



//server.listen(80) //listning on port 80
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});